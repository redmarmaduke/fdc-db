import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class NutrientIncomingName extends Model {};

NutrientIncomingName.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'NutrientIncomingName'
});

module.exports = NutrientIncomingName;
