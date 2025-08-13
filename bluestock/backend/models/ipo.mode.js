import mongoose from 'mongoose';

const ipoScheme = mongoose.Schema({
    company: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    ticker: {
        type: String,
        // required: true
    },
    exchange: {
        type: String,
        // required: true
    },
    profit: {
        type: String,
        // required: true
    },
    debt: {
        type: String,
        // required: true
    },
    assets: {
        type: String,
        // required: true
    },
    ipo_date: {
        type: String,
        // required: true
    },
    ipo_fees: {
        type: String,
        // required: true
    },
    ipo_price: {
        type: String,
        // required: true
    },
    ipo_amount: {
        type: String,
        // required: true
    },
    industry: {
        type: String,
        // required: true
    }
});

const IPOS = mongoose.model("IPOS", ipoScheme);

export default IPOS;