const { Admin } = require('../models/admin');

const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Membuat admin baru
const createAdmin = async (req, res, next) => {
    try {
        const addAdmin = await Admin.create(req.body);
        res.status(201).json(addAdmin);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Mendapatkan detail admin berdasarkan ID
const getAdminById = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        const foundAdmin = await Admin.findByPk(adminId);

        if (!foundAdmin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.json(foundAdmin);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Mengupdate admin berdasarkan ID
const updateAdmin = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        const updatedAdmin = await Admin.update(req.body, { where: { id_admin: adminId } });
        res.json(updatedAdmin);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Menghapus admin berdasarkan ID
const deleteAdmin = async (req, res, next) => {
    try {
        const adminId = req.params.id;
        await Admin.destroy({ where: { id_admin: adminId } });
        res.json({ message: 'Admin deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllAdmins,
    createAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
};