import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodNutrientConversionFactor extends Model {};

FoodNutrientConversionFactor.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoodNutrientConversionFactor'
});

module.exports = FoodNutrientConversionFactor;
