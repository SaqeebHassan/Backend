// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB();
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${BD_NAME}`);
    app.on("error", () => {
      console.log("Errrr", error);
      throw err;
    });
    app.listen(process.env.PORT, ()=>{
        console.log(`App s Listening on port ${process.env.PORT} `)
    })
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
})();
*/
