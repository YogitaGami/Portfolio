import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    id:String,
    name: String,
    email:String,
    message:String,
    currentDate:{ type:Date, default: Date.now },
  });

export default mongoose.model("message", messageSchema) 