'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Gondola = db.define('Gondolas', {
    gondola_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    apiary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    qr: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    no_colonies: {
        type: Sequelize.INTEGER,
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
Gondola.associate = function(models) {
    // associations can be defined here
    Gondola.hasOne(models.Apiary)
    Gondola.hasMany(models.GondolasColonies, {
        onDelete: 'cascade',
        hooks: true,
    })
};
module.exports = Gondola