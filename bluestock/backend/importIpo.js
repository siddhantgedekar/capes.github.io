import { connectStock } from './config/user.js';
import { readFile } from './helper.js';

const run = async () => {
    await connectStock();           // Connect to MongoDB first!
    await readFile('./ipo.json');   // Then run your import
    process.exit();                 // Exit the script when done
};

run();