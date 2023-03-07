import express from "express";
import {
  createGateway,
  deleteGateway,
  getAllGateways,
  getGatewayById,
  updateGateway,
} from "../controllers/gatewayController.js";
import {
  validateCreateGateway,
  validateGatewayId,
} from "../validators/gatewayValidator.js";

const router = express.Router();

router.get("/", getAllGateways);
router.get("/:id", validateGatewayId, getGatewayById);
router.post("/", validateCreateGateway, createGateway);
router.put("/:id", validateGatewayId, updateGateway);
router.delete("/:id", validateGatewayId, deleteGateway);

export default router;
