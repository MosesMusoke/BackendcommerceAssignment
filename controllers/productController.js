const { createProduct, findProductById, updateProduct, deleteProduct, listProducts } = require('../models/product');

const create = async (req, res) => {

    const { name, description, price, quantity, imageUrl } = req.body;
  
    try {
      // craeting a new product
      const product = await createProduct(name, description, price, quantity, imageUrl);
  
      res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      res.status(500).json({ error: 'Product creation failed' });
    }
  };

const getProduct = async (req, res) => {
  const productId = parseInt(req.params.productId);

  const product = await findProductById(productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const update = async (req, res) => {

    const productId = parseInt(req.params.productId);
    const { name, description, price, quantity, imageUrl } = req.body;
  
    try {
      const existingProduct = await findProductById(productId);
  
      if (!existingProduct) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
  
      // Updating the product found above
      const updatedProduct = await updateProduct(productId, {
        name,
        description,
        price,
        quantity,
        imageUrl,
      });
  
      res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
      res.status(500).json({ error: 'Product update failed' });
    }
  };

const remove = async (req, res) => {

    const productId = parseInt(req.params.productId);
  
    try {
      const existingProduct = await findProductById(productId);
  
      if (!existingProduct) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
  
      await deleteProduct(productId);
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Product deletion failed' });
    }
  };

const list = async (req, res) => {
  
  const products = await listProducts();
  res.status(200).json(products);
};

module.exports = { create, getProduct, update, remove, list };


