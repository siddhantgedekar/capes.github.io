import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: {
        type: String,
    },
    task: {
        type: String,
        required: true
    },
    complete: {
        type: String,
    },
}, {
    timestamp: true
});


const Task = mongoose.model("Task", taskSchema);

export default Task;