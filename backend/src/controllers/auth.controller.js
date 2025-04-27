const jwt = require('jsonwebtoken');
const User = require('../models/users');
const express = require('express');

const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validate the email format (basic validation)
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // No password hashing - store the plain text password
        const plainPassword = password; // directly store the password

        // Create user
        const user = await User.create({
            name,
            email,
            password: plainPassword,  // Store plain password
            role
        });

        // Generate token
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Set secure cookie for authentication
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',  // Ensure secure cookies in production
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Login Attempt:", trimmedEmail);

        // Find user by email
        const user = await User.findOne({ where: { email: trimmedEmail } });
        if (!user) {
            console.log("User not found!");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        console.log("User found:", user.email);

        // Compare passwords directly (since they are plain text)
        if (trimmedPassword !== user.password) {
            console.log("Password mismatch!");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        console.log("Password match!");

        // Generate token
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET, // Ensure this is set correctly in your .env file
            { expiresIn: '24h' }
        );

        // Set secure cookie for authentication
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        return res.json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ message: "Error logging out", error: error.message });
    }
};

module.exports = {
    register,
    login,
    logout
};
