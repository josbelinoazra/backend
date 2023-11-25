const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');

// Rute untuk mendapatkan semua perusahaan
companyRouter.get('/companys', companyController.getAllCompanies);

// Rute untuk membuat perusahaan baru
companyRouter.post('/companys', companyController.createCompany);

// Rute untuk mendapatkan detail perusahaan berdasarkan ID
companyRouter.get('/companys/:companyId', companyController.getCompanyById);

// Rute untuk mengupdate perusahaan berdasarkan ID
companyRouter.put('/companys/:companyId', companyController.updateCompany);

// Rute untuk menghapus perusahaan berdasarkan ID
companyRouter.delete('/companys/:companyId', companyController.deleteCompany);

module.exports = companyRouter;
