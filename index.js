import express from "express";
import mongoose from "mongoose";
import { foodRouter } from "./routes/foodRoute.js";
import "dotenv/config.js";

await mongoose.connect(process.env.Mongo_Url);


//create an app
const app = express();
//middleware
app.use(express.json());

//use route
app.use(foodRouter)


//listen port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App is working at ${port}`)
});