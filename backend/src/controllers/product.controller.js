// controllers/productController.js
const Product = require('../models/product.model');

const addProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productCategory,
      subCategory,
      productPrice,
      discountPercentage,
      selectedSizes,
      bestseller,
      ecoFriendly,
    } = req.body;

    const imageFiles = req.files['images'] ? req.files['images'].map(file => file.filename) : [];
    const videoFile = req.files['video'] ? req.files['video'][0].filename : null;

    const product = await Product.create({
      productName,
      productDescription,
      productCategory,
      subCategory,
      productPrice,
      discountPercentage,
      selectedSizes: selectedSizes.join(','), // Save as string
      bestseller,
      ecoFriendly,
      images: imageFiles,
      video: videoFile,
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
};

module.exports = { addProduct };
