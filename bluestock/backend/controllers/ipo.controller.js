import IPOS from "../models/ipo.mode.js";

// register IPO
export const insertIPO = async (ipo) => {
    const newIPO = new IPOS(ipo);
    try {
        await newIPO.save();
        console.log("IPO inserted:", newIPO);
    } catch (error) {
        console.log("Insert error:", error.message);
    }
}
// get IPO
export const getIPOData = async (req, res) => {
    try {
        const ipo = await IPOS.find({});
        res.status(200).json({success: true, data: ipo});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}