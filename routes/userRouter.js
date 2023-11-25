const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userControllers');

// Rute untuk mendapatkan semua admin
userRouter.get('/users', userController.getAllUsers);

// Rute untuk membuat user baru
userRouter.post('/users', userController.createUser);

// Rute untuk mendapatkan detail user berdasarkan ID
userRouter.get('/users/:userId', userController.getUserById);

// Rute untuk mengupdate user berdasarkan ID
userRouter.put('/users/:userId', userController.updateUser);

// Rute untuk menghapus user berdasarkan ID
userRouter.delete('/users/:userId', userController.deleteUser);

module.exports = userRouter;