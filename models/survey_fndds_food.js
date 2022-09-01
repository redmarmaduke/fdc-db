import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class SurveyFnddsFood extends Model {};

SurveyFnddsFood.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'SurveyFnddsFood'
});

module.exports = SurveyFnddsFood;
