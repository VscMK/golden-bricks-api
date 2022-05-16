'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types');

const Queen = db.define('Queen', {
    queen_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    apiary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    gondola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    colony_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color_plate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number_on_plate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    queen_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    clipped: {
        type: Sequelize.CHAR(1),
        allowNull: false,
    },
    mating_status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    marked: {
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
Queen.associate = function(models) {
    // associations can be defined here
};

module.exports = Queen