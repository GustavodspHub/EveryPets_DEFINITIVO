'use strict';
const {Model, DataTypes} = require('sequelize');

class Establishment extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: DataTypes.STRING,
        establishment_name: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        responsible_name: DataTypes.STRING,
        email: DataTypes.STRING
      }, {
      sequelize,
      modelName: 'Establishment',
    }
    )
  }

  static associate(models) {
    // define association here
  }
};

module.exports = Establishment;