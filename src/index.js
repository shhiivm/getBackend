// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

//1st approach to connect to DB
/*
import express from "express";

const app = express();


(async() => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error)=>{
      consol.log("Error: ", error);
      throw error
    })
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`)
    })
  }catch(err){
    console.error("Error: ",err)
    throw err
  }
})() */
