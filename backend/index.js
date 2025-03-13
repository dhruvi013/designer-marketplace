const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./src/config/db');
const User = require('./src/models/users');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;  // Changed to use a different port than MySQL

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

// Start server and test database connection
const startServer = async () => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('✓ Database connection successful');
        
        // Sync all models
        await sequelize.sync({ alter: true });
        console.log('✓ Models synchronized');

        app.listen(PORT, () => {
            console.log(`✓ Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('✕ Error starting server:', error.message);
        console.error('Error details:', error);
        process.exit(1);
    }
};

startServer();