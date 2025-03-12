
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'e-commerce',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'your_password',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

sequelize.authenticate()
    .then(() => console.log('MySQL Connected via Sequelize'))
    .catch(err => console.error('MySQL Connection Failed:', err));

module.exports = sequelize;
