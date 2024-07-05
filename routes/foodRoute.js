import { Router } from "express";
import { getfood, patchFood, postFood } from "../controller/foodcontroll.js";

export const foodRouter = Router();

foodRouter.get('/food', getfood);

foodRouter.post('/food', postFood);

foodRouter.patch('/food', patchFood)
