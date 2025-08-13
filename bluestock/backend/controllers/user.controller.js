import { createAccessToken, createRefreshToken } from '../config/tokens.js';
import User from '../models/user.model.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// register user
export const createUser = async (req, res) => {
    const user = req.body;
    
    // validate details
    if(!user.fname || !user.lname || !user.email || !user.password) {
        return res.status(200).json({success: false, message: "please provide all details"});
    }
    
    // provide the model create with user details
    const newUser = new User(user);

    try {
        // check existing user
        const existingUser = await User.findOne({email: newUser.email});
        if(existingUser) {
            return res.status(200).json({success: false, message: "User already exists."}); // status -> 200 to remove networking errors
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
        newUser.password = hashedPassword;

        // Save the new user
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        res.status(201).json({ success: true, message: "User created" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
// fetch user details
export const getUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json({success: true, data: user});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}
// update user details
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if(!mongoose.types.objectId.isValid(id)){
        return res.status(200).json({success: false, message: "invalid id"});
    }

    try {
        // new set true to get the modified information back
        const updatedUser = await user.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({success: true, data: updatedUser});
    } catch (error) {
        return res.status(500).json({success: true, message: error.message});
    }
}
// get particular user data from email. Login purpose
export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // fetch the user
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(200).json({ success: false, message: 'User not found' });
        }
        
        // compare hashed password with stored password
        const verified = await bcrypt.compare(password, user.password);
        if (!verified) {
            return res.status(200).json({ success: false, message: "Wrong password" });
        }
        
        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({
            success: true,
            token,
            data: user
        });

    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}