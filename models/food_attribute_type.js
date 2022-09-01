import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');

class FoodAttributeType extends Model {};

FoodAttributeType.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'FoodAttributeType'
});

module.exports = FoodAttributeType;

