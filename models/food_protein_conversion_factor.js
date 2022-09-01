import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodProteinConversionFactor extends Model {};

FoodProteinConversionFactor.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoodProteinConversionFactor'
});

module.exports = FoodProteinConversionFactor;
