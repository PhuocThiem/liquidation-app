'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      console.log('category product', models.Product)
      Category.hasMany(models.Product, { foreignKey: 'categoryCode' });
    }
  }
  Category.init(
    {
      categoryCode: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      categoryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories',
      underscored: true,
    }
  );

  return Category;
};
