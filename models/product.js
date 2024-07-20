const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        umkmId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Umkms', 
                key: 'id'       
            }
        },
        produk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        harga: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};
