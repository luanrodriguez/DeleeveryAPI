import {} from "dotenv/config";
import express from 'express'
import DeliveryRoute from './routes/DeliveryRoute.js'

const app = express()

app.use(express.json())
app.use(DeliveryRoute)

app.listen(2035)