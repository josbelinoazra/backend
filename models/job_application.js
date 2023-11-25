'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job_application.init({
    user_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING,
    cover_latter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job_application',
  });
  return job_application;
};