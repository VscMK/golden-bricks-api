'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')
const Colony = require('./colony')

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
Gondola.associate = function(models) {
    // associations can be defined here
    Gondola.hasMany(models.Colony, {
        onDelete: 'cascade',
        hooks: true,
    })
};

Gondola.hasMany(Colony, {
    onDelete: 'cascade',
    hooks: true,
    foreignKey: "gondola_id"
})

module.exports = Gondola