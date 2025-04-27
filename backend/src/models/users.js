const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true
});

// Remove the password hashing before saving, store plain text password
// User.beforeCreate(async (user) => {
//     user.password = await bcrypt.hash(user.password, 10);
// });

// Add method to compare passwords (optional, but will compare plain text now)
User.prototype.comparePassword = async function(candidatePassword) {
    return candidatePassword === this.password;  // Direct comparison without hashing
};

module.exports = User;
