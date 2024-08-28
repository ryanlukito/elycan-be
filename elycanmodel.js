const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

const elycanmodel = db.define(
    'tabel_elycan',
    {
        create_time:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        temperature:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        humidity:{
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {freezeTableName: true}
);

module.exports = elycanmodel;