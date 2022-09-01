import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');


class AgriculturalAcquisition extends Model {};

AgriculturalAcquisition.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    fdc_id: {
        type: DataTypes.INTEGER,        
    },
    acquisition_date: {
        type: DataTypes.DATE,
    },
    market_class: {
        type: DataTypes.STRING,
    },
    treatment: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'AgriculturalAcquisition'
});

module.exports = AgriculturalAcquisition;
