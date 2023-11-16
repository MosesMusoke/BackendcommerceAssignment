// routes/cartRoutes.js
const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();

router.get('/cart', CartController.getCart);
router.post('/cart/add', CartController.addToCart);

module.exports = router;


