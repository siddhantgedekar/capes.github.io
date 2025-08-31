import { createTask, deleteTask, fetchTask, updateTask } from '../controller/controller.js';
import express from 'express';

const taskRoute = express.Router();

taskRoute.get("/", fetchTask);
taskRoute.post("/", createTask);
taskRoute.delete("/:id", deleteTask);
taskRoute.put("/:id", updateTask);

export default taskRoute;