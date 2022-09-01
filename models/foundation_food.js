import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoundationFood extends Model {};

FoundationFood.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'FoundationFood'
});

module.exports = FoundationFood;
