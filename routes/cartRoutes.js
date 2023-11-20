// routes/cartRoutes.js
const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();

router.get('/', CartController.getCart);
router.post('/add', CartController.addToCart);

module.exports = router;


