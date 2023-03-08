
const axios = require("axios");
const Peripheral = require("../models/peripheralModel");
const { validatePeripheral } = require("../utils/validators");

const addPeripheral = async (req, res) => {
  try {
    const { gatewayId } = req.params;
    const { uid, vendor, dateCreated, status } = req.body;

    const gatewayResponse = await axios.get(`http://gateway-service:4000/gateways/${gatewayId}`);
    const gateway = gatewayResponse.data;

    if (gateway.peripherals.length >= 10) {
      return res.status(400).json({ error: "Cannot add more than 10 peripherals to a gateway" });
    }

    const peripheral = new Peripheral({
      uid,
      vendor,
      dateCreated,
      status,
      gatewayId
    });

    // Validate peripheral fields
    const { error } = validatePeripheral(peripheral);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Save peripheral to database
    await peripheral.save();

    // Add peripheral to gateway
    gateway.peripherals.push(peripheral._id);
    await gateway.save();

    return res.status(201).json({ message: "Peripheral added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

const getPeripherals = async (req, res) => {
    try {
      const peripherals = await Peripheral.find().populate("gatewayId");
      res.status(200).json(peripherals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  

  const getPeripheralById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const peripheral = await Peripheral.findById(id).populate("gatewayId");
      if (!peripheral) {
        return res.status(404).json({ message: "Peripheral not found" });
      }
      res.status(200).json(peripheral);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  export { addPeripheral, getPeripherals, getPeripheralById }