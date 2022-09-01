import { Model, DataTypes } from 'sequelize';

const sequelize = require('../connection');


class AcquisitionSample extends Model {};

AcquisitionSample.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    fdc_id_of_sample_food: {
        type: DataTypes.INTEGER,        
    },
    fdc_id_of_acquisition_food: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'AcquisitionSample'
});

module.exports = AcquisitionSample;
