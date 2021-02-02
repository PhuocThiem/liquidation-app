'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init(
    {
      userName: { type: DataTypes.STRING, allowNull: false },
      email: DataTypes.STRING,
      password: { type: DataTypes.STRING, allowNull: false },
      accessToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );

  return User;
};
