const { Umkm } = require('../models');

exports.createUmkm = async (req, res) => {
    const { nama_umkm, alamat_umkm } = req.body;
    try {
        const umkm = await Umkm.create({ nama_umkm, alamat_umkm });
        return res.status(201).json(umkm);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.getAllUmkm = async (req, res) => {
    try {
        const umkms = await Umkm.findAll();
        res.status(200).json(umkms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUmkmById = async (req, res) => {
    const { id } = req.params;
    try {
        const umkm = await Umkm.findByPk(id);
        if (!umkm) {
            return res.status(404).json({ message: 'Umkm not found' });
        }
        res.status(200).json(umkm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUmkm = async (req, res) => {
    const { id } = req.params;
    const { nama_umkm, alamat_umkm } = req.body; 
    try {
        const umkm = await Umkm.findByPk(id);
        if (!umkm) {
            return res.status(404).json({ message: 'Umkm not found' });
        }
        umkm.nama_umkm = nama_umkm; 
        umkm.alamat_umkm = alamat_umkm; 
        await umkm.save();
        return res.status(200).json(umkm);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


exports.deleteUmkm = async (req, res) => {
    const { id } = req.params;
    try {
        const umkm = await Umkm.findByPk(id);
        if (!umkm) {
            return res.status(404).json({ message: 'Umkm not found' });
        }
        await umkm.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
