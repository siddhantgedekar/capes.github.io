import { createUser, deleteUser, fetchUser } from '../controller/controller.js';
import express from 'express';

const userRoute = express.Router();

userRoute.post("/", createUser);
userRoute.get("/", fetchUser);
userRoute.delete("/:id", deleteUser);
// userRoute.put("/:id", updateTask);

export default userRoute;