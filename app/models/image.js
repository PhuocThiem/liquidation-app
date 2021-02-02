'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Product, { foreignKey: 'productCode' });
    }
  }
  Image.init(
    {
      product_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Image',
      tableName: 'images',
      underscored: true,
    }
  );

  return Image;
};
