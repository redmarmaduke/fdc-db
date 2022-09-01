import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class SrLegacyFood extends Model {};

SrLegacyFood.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'SrLegacyFood'
});

module.exports = SrLegacyFood;
