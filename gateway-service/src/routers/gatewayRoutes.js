import express from 'express'
import {
  getAllGateways,
  getGatewayById,
  createGateway,
  updateGateway,
  deleteGateway,
} from '../controllers/gatewayController.js'

const router = express.Router()

router.get('/', getAllGateways)
router.get('/:id', getGatewayById)
router.post('/', createGateway)
router.put('/:id', updateGateway)
router.delete('/:id', deleteGateway)

export default router
