const User = require('../models/UserModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}

// Get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such User" })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: "No Such User" })
    }

    res.status(200).json(user)
}

// Create a new user
const createUser = async (req, res) => {
    const { user_name, user_password, user_role } = req.body;

    try {
        const existingUser = await User.findOne({ user_name });

        if (existingUser) {
            return res.status(400).json({ error: "User name already exists" });
        }

        const user = await User.create({ user_name, user_password, user_role });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such User" })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(404).json({ error: "No Such User" })
    }

    res.status(200).json(user)
}

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such User" });
    }

    const user = await User.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

    if (!user) {
        return res.status(404).json({ error: "No Such User" });
    }

    res.status(200).json(user);
};

//user login
const loginUser = async (req, res) => {
    const { user_name, user_password } = req.body;

    const user = await User.findOne({ user_name });
    if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
    }
    
    if(user_password == user.user_password){
        const token = jwt.sign({ userId: user._id, user_role: user.user_role }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({
            user_name: user.user_name,
            user_id: user._id,
            token: token
        });
    }else{
        return res.status(400).json({ error: "Invalid credentials" });
    }

};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser
}
