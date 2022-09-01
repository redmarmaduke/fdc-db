import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');


class BrandedFood extends Model {};

BrandedFood.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    fdc_id: {
        type: DataTypes.INTEGER,
    },
    brand_owner: {
        type: DataTypes.STRING,
    },
    gtin_upc: {
        type: DataTypes.STRING,
    },
    ingredients: {
        type: DataTypes.STRING,
    },
    serving_size: {
        type: DataTypes.STRING,
    },
    serving_size_unit: {
        type: DataTypes.STRING,
    },
    household_serving_fulltext: {
        type: DataTypes.STRING,
    },
    branded_food_category: {
        type: DataTypes.STRING,
    },
    data_source: {
        type: DataTypes.STRING,
    },
    modified_date: {
        type: DataTypes.DATE,
    },
    available_date: {
        type: DataTypes.DATE,
    },
    discontinued_date: {
        type: DataTypes.DATE,
    },
    market_country: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'BrandedFood'
});

module.exports = BrandedFood;