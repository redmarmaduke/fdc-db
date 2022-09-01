import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class NutrientAnalysisDetails extends Model {};

NutrientAnalysisDetails.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'NutrientAnalysisDetails'
});

module.exports = NutrientAnalysisDetails;
