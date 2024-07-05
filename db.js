import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const mongoUri = process.env.Mongo_Url

export const dbConnection = () => {
    mongoose.connect(mongoUri).then( () => {
        console.log('Database is On' )
    })
};