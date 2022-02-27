'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const User = db.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true,
});
User.associate = function(models) {
    // associations can be defined here
};
module.exports = User