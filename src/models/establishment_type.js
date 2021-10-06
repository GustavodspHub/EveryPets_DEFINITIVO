'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Establishment_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Establishment_Type.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Establishment_Type',
  });
  return Establishment_Type;
};