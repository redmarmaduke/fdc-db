mport { Model, DataTypes } from 'sequelize';

const { DataTypes } = require('sequelize/types');
const sequelize = require('../connection');

class FoodAttribute extends Model {};

FoodAttribute.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    food_nutrient_conversion_factor_id: {
        type: DataTypes.INTEGER,
    },
    protein_value: {
        type: DataTypes.INTEGER,
    },
    fat_value: {
        type: DataTypes.INTEGER,
    },
    carbohydrate_value: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'FoodAttribute'
});

