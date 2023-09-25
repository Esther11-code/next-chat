"use server"

import { connect } from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@next-chat.aboujec.mongodb.net/?retryWrites=true&w=majority`;

export async function connectDB (params) {
  try {
      await connect(connectionString)
      console.log("connected db successfully");
  } catch (error) {
    console.log("unable to connect database");
  }
}