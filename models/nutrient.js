import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class Nutrient extends Model {};

Nutrient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'Nutrient'
});

module.exports = Nutrient;
