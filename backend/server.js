import userRoute from './route/userRoute.js';
import { connectDB } from './config/db.js';
import taskRoute from './route/route.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todo/task', taskRoute);
app.use('/api/todo/user', userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log("Server started as http://localhost:5000");
})