
const productController = require('../Controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getSingleProduct);

router.post('/api/product', productController.addNewProduct)
router.put('/api/product', productController.updateProduct)
router.delete('/api/product/:id', productController.deleteProduct)
module.exports = router


