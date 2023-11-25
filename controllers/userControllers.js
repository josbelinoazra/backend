const { User } = require('../models/user');

// Mendapatkan semua pengguna
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Membuat pengguna baru
const createUser = async (req, res, next) => {
    try {
        const addUsers = await User.create(req.body);
        res.status(201).json(addUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Mendapatkan detail pengguna berdasarkan ID
const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const foundUser = await User.findByPk(userId);

        if (!foundUser) {
            res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        } else {
            res.json(foundUser);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Mengupdate pengguna berdasarkan ID
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.update(req.body, { where: { id_user: userId } });
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

// Menghapus pengguna berdasarkan ID
const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await User.destroy({ where: { id_user: userId } });
        res.json({ message: 'Pengguna dihapus dengan sukses' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};