const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');

// Admin registration controller
const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ where: { email } });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // Create a new admin
        const newAdmin = await Admin.create({ email, password });

        return res.status(201).json({
            message: "Registration successful",
            admin: {
                id: newAdmin.id,
                email: newAdmin.email
            }
        });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Error registering admin", error: error.message });
    }
};


// Admin login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find admin by email
        const admin = await Admin.findOne({ where: { email } });

        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare the passwords (since we're not using hashing, just comparing directly)
        if (admin.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

        return res.json({
            message: "Login successful",
            token
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

module.exports = { login, register };