import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import message from "./model/portfolio_message.js"

dotenv.config()
let conn = mongoose.connect(process.env.MONGO_URL)

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async(req, res) => {
    let data = req.body
    const messageMe = await message.create(data)
    res.json(messageMe)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})