const { Sequelize } = require('sequelize');
require('dotenv').config();

// Get Service URI from environment variable
const serviceUri = process.env.DB_URI;

const sequelize = new Sequelize(serviceUri, {
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

const User = require('./user')(sequelize);
const Umkm = require('./umkm')(sequelize);
const Product = require('./product')(sequelize);

// Define associations
Umkm.hasMany(Product, { foreignKey: 'umkmId' });
Product.belongsTo(Umkm, { foreignKey: 'umkmId' });

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = {
  sequelize,
  User,
  Umkm,
  Product
};
