import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";
import express from "express";
const app = express();

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(`Connection - ${connectionInstance.connection.host}`);

    app.on("error", (error) => {
      console.log("error in express", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error, "error");
    throw error;
  }
};
