import {} from "dotenv/config";
import cors from 'cors'
import express from 'express'
import DeliveryRoute from './routes/DeliveryRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(DeliveryRoute)

app.listen(process.env.PORT)