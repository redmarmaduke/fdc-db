import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class WweiaFoodCategory extends Model {};

WweiaFoodCategory.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'WweiaFoodCategory'
});

module.exports = WweiaFoodCategory;
