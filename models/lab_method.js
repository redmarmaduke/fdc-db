import { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class LabMethod extends Model {};

LabMethod.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'LabMethod'
});

module.exports = LabMethod;
