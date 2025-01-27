import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import message from "./model/portfolio_message.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

app.use(cors(
  {
    origin: ['https://my-portfolio-5v76nmoc5-yogita-gamis-projects.vercel.app/'],
    credentials: true,
  }
))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async(req, res) => {
    let data = req.body
    const messageMe = await message.create(data)
    res.json(messageMe)
  })


