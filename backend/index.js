const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/db");
const authRoutes = require("./src/routes/auth.routes");

const app = express();

// CORS Configuration
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

app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Database Synchronization
sequelize.sync()
    .then(() => console.log("✅ Database synchronized"))
    .catch((err) => console.error("❌ Database sync error:", err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
