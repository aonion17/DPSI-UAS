const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const umkmController = require('../controllers/umkmController');
const productController = require('../controllers/productController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// User routes
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// Umkm routes
router.post('/umkms', authenticateToken, authorizeRole(['superadmin']), umkmController.createUmkm);
router.get('/umkms', authenticateToken, umkmController.getAllUmkm);
router.get('/umkms/:id', authenticateToken, umkmController.getUmkmById);
router.put('/umkms/:id', authenticateToken, authorizeRole(['superadmin']), umkmController.updateUmkm);
router.delete('/umkms/:id', authenticateToken, authorizeRole(['superadmin']), umkmController.deleteUmkm);

// Product routes
router.post('/products', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.createProduct);
router.get('/products', authenticateToken, productController.getAllProducts);
router.get('/products/:id', authenticateToken, productController.getProductById);
router.put('/products/:id', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.updateProduct);
router.delete('/products/:id', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.deleteProduct);

module.exports = router;