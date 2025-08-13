import stockRouter from './routes/user.route.js'
import ipoRouter from './routes/ipo.route.js'
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import dotenvx from '@dotenvx/dotenvx';
import express from 'express';
import cors from 'cors';

dotenvx.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
// connect to the database above
app.use('/api/bluestock/users', stockRouter);
app.use('/api/bluestock/ipos', ipoRouter);


app.listen(PORT, () => {
    connectDB();
    console.log("connection successful at http://localhost:5000");
})