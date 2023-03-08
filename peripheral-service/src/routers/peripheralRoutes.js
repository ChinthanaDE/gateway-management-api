import express from 'express'
import { addPeripheral, getPeripherals, getPeripheralById } from '../controllers/peripheralController'
import { validateCreate } from '../validator/peripheral.validator'
const router = express.Router()

router.post('/:gatewayId', validateCreate, addPeripheral)

router.get('/', getPeripherals)

router.get('/:id', getPeripheralById)

export default router
