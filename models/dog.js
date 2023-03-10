'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.hasMany(models.Grooming, {
        foreignKey: 'dogId',
        as: 'groomings'
      })
    }
  }

  Dog.init({
    name: DataTypes.STRING,
    toy: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dog',
    
  });
  return Dog;
};