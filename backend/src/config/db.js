const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('e-commerce', 'root', '', {  // Using direct values for XAMPP default
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test the connection with better error handling
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✓ MySQL Connected successfully via Sequelize');
        
        // Sync all models
        await sequelize.sync({ alter: true });
        console.log('✓ Database synchronized');
    } catch (error) {
        console.error('✕ Database connection failed:', error.message);
        console.error('Error details:', error);
        process.exit(1);
    }
};

testConnection();

module.exports = sequelize;
