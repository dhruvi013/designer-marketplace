const express = require("express");
const cors = require("cors");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const sequelize = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");
const adminRoutes = require("./src/routes/admin.routes");
const productRoutes = require('./src/routes/product.route');
require('dotenv').config();


const app = express();

// ✅ Parse JSON before anything else
app.use(express.json());


// ✅ CORS Configuration
const allowedOrigins = ["http://localhost:5173", "http://localhost:5137"];
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ✅ Session Configuration
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
    })
);

const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));
// app.use('/public', express.static(path.join(__dirname, 'public')));


// ✅ Routes
app.use("/auth", authRoutes);
app.use("/auth", adminRoutes);       // Admin authentication routes
app.use('/api/products', productRoutes);
app.use('/api', productRoutes); // Makes /api/products work
app.use('/api', productRoutes);
app.use('/api/products', productRoutes);



// ✅ Database Sync
sequelize.sync()
    .then(() => console.log("✅ Database synchronized"))
    .catch((err) => console.error("❌ Database sync error:", err));

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
