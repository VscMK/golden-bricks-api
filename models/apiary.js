'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Apiary = db.define('Apiary', {
    apiary_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qr: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
    },
    longitude: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    no_colonies: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    fence: {
        type: Sequelize.CHAR(1),
    },
    electricity: {
        type: Sequelize.CHAR(1),
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }

}, {
    freezeTableName: true,
});
Apiary.associate = function(models) {
    // associations can be defined here
    Apiary.hasMany(models.Gondola, {
        onDelete: 'cascade',
        hooks: true,
    })
    Apiary.hasMany(models.Colony, {
        onDelete: 'cascade',
        hooks: true,
    })

};
module.exports = Apiary