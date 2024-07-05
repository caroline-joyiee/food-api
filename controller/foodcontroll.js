import { foodModel } from "../model/foodModel.js";

export const getfood = async (req, res, next) => {
    try {
        const allfood = await foodModel.find()
        res.json(allfood)
    } catch (error) {
        next(error)
        
    }
}

export const postFood = async (req, res, next) => {
    try {
        const newfood =await foodModel.create(req.body)
        res.json(newfood)
    } catch (error) {
        next (error)
        
    }
}

export const patchFood = async (req, res, next) => {
    try {
        const update = await foodModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        req.status(201).json(patchFood)
    } catch (error) {
        next(error)
        
    }
}