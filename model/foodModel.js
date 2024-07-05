import { json } from "express";
import { model, Schema } from "mongoose";


 const foodSchema = new Schema({
    foodName: {type: String, required: true},
    description: {type: String, required: true },
    customize: {type: String},
    price: {type: Number}
 }, {
    timestamps: true
 })

//  foodSchema.plugin(toJSON)
 
export const foodModel = model('food', foodSchema)
