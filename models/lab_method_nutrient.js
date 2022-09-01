import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class LabMethodNutrient extends Model {};

LabMethodNutrient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'LabMethodNutrient'
});

module.exports = LabMethodNutrient;
