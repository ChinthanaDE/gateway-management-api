import Gateway from '../models/gatewayModel.js'

const getAllGateways = async (req, res) => {
  try {
    const gateways = await Gateway.find().populate('devices')
    res.status(200).json(gateways)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getGatewayById = async (req, res) => {
  try {
    const { id } = req.params
    const gateway = await Gateway.findById(id).populate('devices')
    if (!gateway) {
      return res.status(404).json({ message: 'Gateway not found' })
    }
    res.json(gateway)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createGateway = async (req, res) => {
  try {
    const { serial, name, ipv4 } = req.body
    const gateway = new Gateway({ serial, name, ipv4 })
    const result = await gateway.save()
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateGateway = async (req, res) => {
  try {
    const { id } = req.params
    const { serial, name, ipv4 } = req.body
    const gateway = await Gateway.findById(id)
    if (!gateway) {
      return res.status(404).json({ message: 'Gateway not found' })
    }
    gateway.serial = serial
    gateway.name = name
    gateway.ipv4 = ipv4
    const result = await gateway.save()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteGateway = async (req, res) => {
  const { id } = req.params
  try {
    const gateway = await Gateway.findById(id)
    if (!gateway) {
      return res.status(404).json({ message: 'Gateway not found' })
    }
    await gateway.remove()
    res.json({ message: 'Gateway deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { getAllGateways, getGatewayById, createGateway, updateGateway, deleteGateway }
