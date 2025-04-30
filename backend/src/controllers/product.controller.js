const Product = require('../models/product.model');

exports.addProduct = async (req, res) => {
  try {
    const { productName, productDescription, productCategory, subCategory, productPrice, discountPercentage, selectedSizes, bestseller, ecoFriendly } = req.body;

    // File paths
    const imagePaths = req.files.images.map(file => file.path);
    const videoPath = req.files.video ? req.files.video[0].path : null;

    const product = await Product.create({
      productName,
      productDescription,
      productCategory,
      subCategory,
      productPrice,
      discountPercentage,
      selectedSizes: JSON.parse(selectedSizes),  // Make sure this is a JSON string
      bestseller,
      ecoFriendly,
      images: imagePaths,
      video: videoPath
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Error adding product' });
  }
};
