'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    image_url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    salary: DataTypes.DECIMAL,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};