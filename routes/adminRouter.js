const express = require('express');
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rute untuk mendapatkan semua admin
adminRouter.get('/admins', adminController.getAllAdmins);

// Rute untuk membuat admin baru
adminRouter.post('/admins', adminController.createAdmin);

// Rute untuk mendapatkan detail admin berdasarkan ID
adminRouter.get('/admins/:adminId', adminController.getAdminById);

// Rute untuk mengupdate admin berdasarkan ID
adminRouter.put('/admins/:adminId', adminController.updateAdmin);

// Rute untuk menghapus admin berdasarkan ID
adminRouter.delete('/admins/:adminId', adminController.deleteAdmin);

module.exports = adminRouter;