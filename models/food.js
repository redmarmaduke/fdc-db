import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');


class Food extends Model {};

Food.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    fdc_id: {
        type: DataTypes.NUMBER,
    },
    foodClass: {
        type: DataTypes.STRING,
    },
    data_type: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    food_category_id: {
        type: DataTypes.NUMBER,
    },
    publication_date: {
        type: DataTypes.DATE,
    },
    scientific_name: {
        type: DataTypes.STRING,
    },
    food_key: {
        type: DataTypes.STRING,
    },    
}, {
    sequelize,
    modelName: 'Food'
});

module.exports = Food;

