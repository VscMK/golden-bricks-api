'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Gondola = db.define('gondola', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    apiary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
        onDelete: 'CASCADE',
    },
    QR_code: {
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
    this.apiary_id = this.belongsTo(models.user, {
        foreignKey: 'id',
    });
};
module.exports = Gondola