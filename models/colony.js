'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')
const Queen = require('./queen')

const Colony = db.define('Colonies', {
    colony_id: {
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
    qr: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    no_boxes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    list_boxes: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    queen: {
        type: Sequelize.CHAR(1),
        allowNull: false,
    },
    queen_alarm: {
        type: Sequelize.CHAR(1),
        allowNull: false,
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
Colony.associate = function(models) {
    // associations can be defined here
    Colony.belongsTo(models.Apiary)
    Colony.belongsTo(models.Gondola)
};
Colony.hasOne(Queen, {
    onDelete: 'cascade',
    hooks: true,
    foreignKey: "colony_id"
})
module.exports = Colony