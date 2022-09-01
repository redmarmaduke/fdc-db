import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodUpdateLogEntry extends Model {};

FoodUpdateLogEntry.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoodUpdateLogEntry'
});

module.exports = FoodUpdateLogEntry;
