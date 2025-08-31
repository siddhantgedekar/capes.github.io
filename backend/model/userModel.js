import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [
        {
            description: { type: String },
            completed: { type: String }
        }
    ],
    visible: { type: Boolean, default: false }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;