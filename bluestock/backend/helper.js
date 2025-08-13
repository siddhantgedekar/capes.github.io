import { insertIPO } from './controllers/ipo.controller.js';
import fs from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

const path = "./ipo.json";

export const readFile = async (path) => {
    try {
        const data = (await fs.readFile(path, 'utf-8'));
        const ipoObj = JSON.parse(data);

        if (Array.isArray(ipoObj)) {
            for (const ipo of ipoObj) {
                await insertIPO(ipo);
            }
        } else {
            await insertIPO(ipoObj);
        }
        console.log("Done");
    } catch (err) {
        console.log(err.message);
    }
}

// readFile(path);