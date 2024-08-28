const {Sequelize, DataTypes} = require('sequelize');

const db = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    username:"root",
    password:"",
    database:"elycan"
});

module.exports = db;