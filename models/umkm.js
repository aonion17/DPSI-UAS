const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Umkm', {
        nama_umkm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alamat_umkm: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
