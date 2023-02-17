'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grooming extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grooming.belongsTo(models.Dog, {
        foreignKey: 'dogId'
      })
    }
  }
  Grooming.init({
    name: DataTypes.STRING,
    service: {
      type: DataTypes.ENUM('Shampoo', 'Nails', 'Haircut'),
    defaultValue: 'Shampoo'
    },
    dogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Grooming',
  });
  return Grooming;
};