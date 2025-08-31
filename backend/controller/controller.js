import User from '../model/userModel.js';
import Task from '../model/model.js';
import bcrypt from 'bcrypt';

export const createTask = async (req, res) => {
    const task = req.body;
    
    if(!task.title || !task.task) {
        return {success: false, message: "cannot create an empty task"};
    }
    
    const newTask = Task(task);
    try {
        console.log(task);
        await newTask.save();
        res.status(201).json({ success: true, message: "task created", data: newTask });
    } catch (error) {
        res.status(200).json({ success: false, message: `error creating task ${error.message}` });
    }
}

export const fetchTask = async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
}

export const updateTask = async (req, res) => {
    const updatedTask = req.body;

    try {
        const newTask = await Task.findByIdAndUpdate(updatedTask._id, updatedTask, {new: true});
        res.status(200).json({ success: true, message: "Task updated", data: newTask });
    } catch (error) {
        res.status(200).json({ success: false, message: error });
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Task deleted' });
    } catch (error) {
        res.status(200).json({ success: fasle, message: 'Error deleting tasks' });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    
    // validate details
    if(!user.name || !user.email || !user.password) {
        return res.status(400).json({ success: false, message: "Provide all details!!"});
    }
    
    try {
        const existingUser = await User.findOne({email: user.email});
        if(existingUser) {
            return res.status(200).json({ success: false, message: 'user already exist' });
        }

        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        user.password = await bcrypt.hash(user.password, salt);
        
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ success: true, message: "Registration complete" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to register" });
    }
}

export const fetchUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(200).json({ success: false, message: "Failed to get users" });
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        res.status(200).json({ success: false, message: "Failed to delete user" });
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(200).json({ success: false, message: "User not found" });
        }

        // generate salt
        const salt = await bcrypt.genSalt(10);
        // hash password
        const isMatch = await bcrypt.hash(password, salt);

        if(isMatch !== user.password) {
            return res.status(200).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, message: "Login successful", data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Login failed" });
    }
}