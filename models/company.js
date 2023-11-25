'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.transaction, {
        foreignKey: 'id_company'
      });
    }
  }
  Company.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING,
    web_url: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};