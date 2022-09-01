import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');

class FoodAttribute extends Model {};

FoodAttribute.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    fdc_id: {
        type: DataTypes.INTEGER,
    },
    seq_num: {
        type: DataTypes.INTEGER,
    },
    food_attribute_type_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    value: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'FoodAttribute'
});

module.exports = FoodAttribute;


