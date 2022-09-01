import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodNutrientDerivation extends Model {};

FoodNutrientDerivation.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoodNutrientDerivation'
});

module.exports = FoodNutrientDerivation;
