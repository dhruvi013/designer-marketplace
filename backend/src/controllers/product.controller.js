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

exports.getFullProductDetails = async (req, res) => {
  try {
    const products = await Product.findAll();
    const full = products.map((p) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      category: p.category,
      price: p.price,
      discount: p.discount,
      description: p.description,
      bestseller: p.bestseller,
      ecoFriendly: p.ecoFriendly,
selectedSizes: (p.selectedSizes || '').split(',').map(size => size.trim()).filter(Boolean),
images: Array.isArray(p.images) ? p.images : (p.images || '').split(',').map(img => img.trim()).filter(Boolean),
      video: p.video
    }));
    res.json(full);
  } catch (error) {
    console.error("Error fetching full product details:", error);
    res.status(500).json({ error: 'Failed to fetch full product details' });
  }
};


// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;  // Get product ID from URL params

    // Check if product exists
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Delete product
    await Product.destroy({ where: { id } });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;  // product ID from URL param
    const updateData = req.body; // updated fields in request body

    // Find existing product
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update product with new data
    await product.update(updateData);

    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};
