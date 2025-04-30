const express = require('express');
const multer = require('multer');
const { addProduct } = require('../controllers/product.controller');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
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

module.exports = router;
