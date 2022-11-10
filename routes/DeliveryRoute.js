import express from 'express'

import { DeliveryController } from '../controllers/DeliveryController.js'

const route = express.Router()
const controller = new DeliveryController()

route.get('/delivery', controller.getDelivery)
route.post('/delivery', controller.postDelivery)

export default route