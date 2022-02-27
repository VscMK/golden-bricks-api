'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Colony = db.define('colony', {
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
        }
    },
    gondola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'gondola',
            key: 'id'
        }
    },
    QR_code: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    no_boxes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    queen_YN: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    queen_alarm_YN: {
        type: Sequelize.CHAR,
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
};
module.exports = Colony