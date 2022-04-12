'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Inspection = db.define('Inspection', {
    inspection_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    colony_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    number_of_boxes: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    number_occupied_combs: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    number_brood_combs: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    queen_status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    queen_status_change_reason: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    swarming_tendency: {
        type: Sequelize.CHAR(1),
        allowNull: true,
    },
    varoa: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    natural_varoa: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    colony_loss: {
        type: Sequelize.CHAR(1),
        allowNull: true,
    },
    pollen: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    honey: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    hygiene: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    bees_gentleness: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    food: {
        type: Sequelize.CHAR(1),
        allowNull: false,
    },
    food_type: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    food_ammount: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    health_condition: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    attention_needed: {
        type: Sequelize.CHAR(1),
        allowNull: false,
    },
    attention_needed_time: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    total_weight: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: true,
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
Inspection.associate = function(models) {
    // associations can be defined here
};

module.exports = Inspection