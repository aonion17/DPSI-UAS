const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const umkmController = require('../controllers/umkmController');
const productController = require('../controllers/productController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// User routes
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// UMKM ROUTES

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin' yang dapat mengakses rute ini
router.post('/umkms', authenticateToken, authorizeRole(['superadmin']), umkmController.createUmkm);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
router.get('/umkms', authenticateToken, umkmController.getAllUmkm);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
router.get('/umkms/:id', authenticateToken, umkmController.getUmkmById);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin' yang dapat mengakses rute ini
router.put('/umkms/:id', authenticateToken, authorizeRole(['superadmin']), umkmController.updateUmkm);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin' yang dapat mengakses rute ini
router.delete('/umkms/:id', authenticateToken, authorizeRole(['superadmin']), umkmController.deleteUmkm);


// PRODUCT ROUTES

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin dan admin' yang dapat mengakses rute ini
router.post('/products', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.createProduct);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
router.get('/products', authenticateToken, productController.getAllProducts);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
router.get('/products/:id', authenticateToken, productController.getProductById);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin dan admin' yang dapat mengakses rute ini
router.put('/products/:id', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.updateProduct);

// Middleware authenticateToken akan memeriksa token otentikasi untuk memastikan pengguna telah terautentikasi
// Middleware authorizeRole akan memeriksa peran pengguna untuk memastikan hanya pengguna dengan peran 'superadmin dan admin' yang dapat mengakses rute ini
router.delete('/products/:id', authenticateToken, authorizeRole(['superadmin', 'admin']), productController.deleteProduct);

module.exports = router;