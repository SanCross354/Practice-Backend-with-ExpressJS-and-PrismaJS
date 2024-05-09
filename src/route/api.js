//Route for User who has authenticated
import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = express.Router();
userRouter.use(authMiddleware); //to get token after login
userRouter.get('/api/users/current', userController.get);


export {
    userRouter
}