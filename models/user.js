'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const User = db.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING

}, {});
User.associate = function(models) {
    // associations can be defined here
};
module.exports = User