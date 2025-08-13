import IPOS from '../../../backend/models/ipo.mode.js';
import { useIPOStore } from './store.js';
import fs from 'fs'

const csvFile = '../../../IPO_data_2023_S1.csv';
const headers = "company,state,ticker,exchange,profit,debt,assets,ipo_date,ipo_fees,ipo_price,ipo_amount,industry".trim().split(",");

// const [newIpo, setNewIpo] = useState(headers);

const records = fs.readFileSync(csvFile, 'utf-8').split(/\r?\n/).slice(1);

const json = records.map(row => {
    const values = row.split(",");
    return Object.fromEntries(
        headers.map((key, index) => [key, values[index]?.trim()])
    );
});

// console.log(json);

// try {
//   const result = await IPOS.insertMany(json);
//   console.log(`${result.length} IPO records inserted.`);
// } catch (err) {
//   console.error("Insert failed:", err);
// }
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const { createIPO } = useIPOStore();

const record = {
  "company": "Microsoft Corp",
  "state": "Washington",
  "ticker": "MSFT",
  "exchange": "Nasdaq",
  "profit": "46.3",
  "debt": "1.9",
  "assets": "65.1",
  "ipo_date": "3/02/1986",
  "ipo_fees": "7.071",
  "ipo_price": "21",
  "ipo_amount": "58.695",
  "industry": "IT"
 }
// for (const record of json) {
  try {
    await IPOS.create(record);  // inserts one at a time
    console.log("Inserted:", record.company);
    await delay(300);
  } catch (err) {
    console.error("Failed to insert:", json.company, err.message);
  }
// }