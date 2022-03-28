'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const GondolasColonies = db.define('Gondolas_Colonies', {
    gondola_colony_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    gondola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    colony_id: {
        type: Sequelize.BIGINT,
        allowNull: false
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
GondolasColonies.associate = function(models) {
    // associations can be defined here
    GondolasColonies.hasMany(models.Gondola, {
        onDelete: 'cascade',
        hooks: true,
    })
    GondolasColonies.hasMany(models.Colony, {
        onDelete: 'cascade',
        hooks: true,
    })

};
module.exports = GondolasColonies