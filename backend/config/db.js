import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection Successful at host: ", con.connection.host);
    } catch (error) {
        console.log("Error at: ",error.message);
    }
}