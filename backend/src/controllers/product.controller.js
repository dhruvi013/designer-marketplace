const path = require('path');
const Product = require('../models/product.model');

exports.addProduct = async (req, res) => {
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
      ecoFriendly
    } = req.body;

    let parsedSizes = [];
    if (typeof selectedSizes === 'string') {
      try {
        parsedSizes = JSON.parse(selectedSizes);
        if (!Array.isArray(parsedSizes)) {
          throw new Error(); // Fallback to splitting string
        }
      } catch (err) {
        parsedSizes = selectedSizes.split(',');
      }
    } else if (Array.isArray(selectedSizes)) {
      parsedSizes = selectedSizes.join(',');
    }

    // Handling multiple image uploads
    const imagePaths = req.files.images?.map(file => {
      console.log(file.path);  // Log the full file path during the upload
      return `/assets/${path.basename(file.path)}`;
    }) || [];
    
    // Optionally handle video file as before
    const videoPath = req.files.video?.[0]
      ? `/assets/${path.basename(req.files.video[0].path)}`
      : null;

    // Create product with images stored as an array
    const product = await Product.create({
      productName,
      productDescription,
      productCategory,
      subCategory,
      productPrice,
      discountPercentage,
      selectedSizes: parsedSizes, // Store the sizes as a comma-separated string
      bestseller,
      ecoFriendly,
      images: imagePaths, // Save multiple images as array
      video: videoPath,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Error adding product' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    const trimmed = products.map((p) => ({
      id: p.id,
      name: p.productName,  // Changed from productName to name
      category: p.productCategory,  // Changed from productCategory to category
      price: p.productPrice,  // Changed from productPrice to price
      discount: p.discountPercentage,  // Changed from discountPercentage to discount
      images: p.images,
      bestseller: p.bestseller,
      ecoFriendly: p.ecoFriendly
    }));
        res.json(trimmed);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
