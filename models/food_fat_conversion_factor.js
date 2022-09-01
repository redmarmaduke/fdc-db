import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodFatConversionFactor extends Model {};

FoodFatConversionFactor.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoodFatConversionFactor'
});

module.exports = FoodFatConversionFactor;
