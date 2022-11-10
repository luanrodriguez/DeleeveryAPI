import { database } from '../database/database.js'
const delivery = database.models.Delivery

export class DeliveryController {
    async getDelivery(req, res) {
        return res.json(await delivery.findAll())
    }

    async postDelivery(req, res) {
        return res.json(await delivery.create(req.body))
    }
}