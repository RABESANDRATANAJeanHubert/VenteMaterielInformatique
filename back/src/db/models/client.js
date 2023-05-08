'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  class CLient extends Model {
=======
  class Client extends Model {
>>>>>>> b41c6ce32bf11b87e2d3e52353d70cbc13055d14
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<< HEAD
  CLient.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CLient',
  });
  return CLient;
=======
  Client.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
>>>>>>> b41c6ce32bf11b87e2d3e52353d70cbc13055d14
};