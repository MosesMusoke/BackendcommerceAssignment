const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.create);
router.get('/:productId', productController.getProduct);
router.patch('/:productId', productController.update);
router.delete('/:productId', productController.remove);
router.get('/', productController.list);

module.exports = router;


