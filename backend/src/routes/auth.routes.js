const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Add this line
const User = require("../models/users");

const router = express.Router();

// **🔹 REGISTER**
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// **🔹 LOGIN**
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ success: false, message: "User not found" });

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            "your-jwt-secret",
            { expiresIn: "24h" }
        );

        // Set session
        req.session.user = { id: user.id, email: user.email };
        
        res.json({
            success: true,
            message: "Login successful",
            user: { id: user.id, email: user.email },
            token
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// **🔹 LOGOUT**
router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error("Logout Error:", err);
            return res.status(500).json({ message: "Logout failed" });
        }
        res.json({ message: "Logged out successfully" });
    });
});

module.exports = router;
