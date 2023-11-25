const { Company } = require('../models/company');

// Mendapatkan semua perusahaan
const getAllCompanies = async (req, res, next) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Membuat perusahaan baru
const createCompany = async (req, res, next) => {
    try {
        const addCompany = await Company.create(req.body);
        res.status(201).json(addCompany);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Mendapatkan detail perusahaan berdasarkan ID
const getCompanyById = async (req, res, next) => {
    try {
        const companyId = req.params.id;
        const foundCompany = await Company.findByPk(companyId);

        if (!foundCompany) {
            res.status(404).json({ message: 'Perusahaan tidak ditemukan' });
        } else {
            res.json(foundCompany);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Mengupdate perusahaan berdasarkan ID
const updateCompany = async (req, res, next) => {
    try {
        const companyId = req.params.id;
        const updatedCompany = await Company.update(req.body, { where: { id_company: companyId } });
        res.json(updatedCompany);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Menghapus perusahaan berdasarkan ID
const deleteCompany = async (req, res, next) => {
    try {
        const companyId = req.params.id;
        await Company.destroy({ where: { id_company: companyId } });
        res.json({ message: 'Perusahaan dihapus dengan sukses' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllCompanies,
    createCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,
};
