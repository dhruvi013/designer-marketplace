const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-commerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

// Test Connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
