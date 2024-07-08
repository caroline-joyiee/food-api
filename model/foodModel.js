import { json } from "express";
import { model, Schema } from "mongoose";


 const foodSchema = new Schema({
    foodName: {type: String, required: true, unique: true},
    description: {type: String},
    customize: [{type: String}],
    price: {type: Number},
    image: {type: String}
 }, {
    timestamps: true
 })

//  foodSchema.plugin(toJSON)
 
export const foodModel = model('food', foodSchema)
