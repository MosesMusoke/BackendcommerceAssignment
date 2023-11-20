
const CartModel = require('../models/cart');

const getCart = async (req, res) => {
  try {
    const cart = await CartModel.getCart();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;

  try {
    const cart = await CartModel.addToCart(productId, quantity, userId);
    res.json({ success: true, cart });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
};


