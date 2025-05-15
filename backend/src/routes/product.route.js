const express = require('express');
const multer = require('multer');
const path = require('path');
const { addProduct, getAllProducts, getFullProductDetails, deleteProduct, updateProduct } = require('../controllers/product.controller');

const router = express.Router();

// Store in 'assets/' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../assets/')); // Ensure folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).fields([
  { name: 'images', maxCount: 4 },
  { name: 'video', maxCount: 1 }
]);

router.post('/add-product', upload, addProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getFullProductDetails);
router.delete('/products/:id', deleteProduct);
router.put('/:id', updateProduct);
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll(); // or however you're fetching
    const trimmed = products.map((p) => ({
      id: p.id,
      name: p.name,
      // brand: p.brand,
      price: p.price,
      discount: p.discount,
      images: JSON.parse(p.images) // or just p.images if already array
    }));
    res.json(trimmed);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};


// In product.controller.js
exports.getFullProductDetails = async (req, res) => {
  try {
    const products = await Product.findAll(); // Fetch all products
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



module.exports = router;
