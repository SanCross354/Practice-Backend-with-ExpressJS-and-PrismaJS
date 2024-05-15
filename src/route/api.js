//Route for User who has authenticated
import express from "express";
import userController from "../controller/user-controller.js";
import contactController from "../controller/contact-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = express.Router();
userRouter.use(authMiddleware); //to get token after login

//User API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

//Contact API
userRouter.post('/api/contacts', contactController.create);

export {
    userRouter
}