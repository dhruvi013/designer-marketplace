const express = require("express");
const jwt = require("jsonwebtoken"); // Add this line
const User = require("../models/users");
const { register, login, logout } = require("../controllers/auth.controller");

const router = express.Router();

// **🔹 REGISTER**
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        // Store plain password (no hashing)
        const plainPassword = password;

        // Create new user with the plain text password
        const newUser = await User.create({ name, email, password: plainPassword });

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// router.post("/register", register);

// Login Route
router.post("/login", login);


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


// router.get("/logout", logout);

module.exports = router;
