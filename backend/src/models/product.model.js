// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  productCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discountPercentage: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  selectedSizes: {
    type: DataTypes.STRING,
    allowNull: true, // will store sizes as comma separated
  },
  bestseller: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ecoFriendly: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  images: {
    type: DataTypes.JSON, // to store array of image file names
    allowNull: true,
  },
  video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Product;
