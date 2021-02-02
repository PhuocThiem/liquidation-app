'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'categoryCode' });
      Product.hasMany(models.Image, { foreignKey: 'productCode' });
    }
  }
  Product.init(
    {
      productCode: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
      productName: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      productState: DataTypes.STRING,
      productDescription: DataTypes.STRING,
      productUrl: DataTypes.STRING,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      underscored: true,
    }
  );

  return Product;
};
