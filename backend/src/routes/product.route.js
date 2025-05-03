const express = require('express');
const multer = require('multer');
const path = require('path');
const { addProduct, getAllProducts } = require('../controllers/product.controller');

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

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll(); // or however you're fetching
    const trimmed = products.map((p) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
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


module.exports = router;
