'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Apiary = db.define('apiary', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    QR_code: {
        type: Sequelize.BIGINT,
        allowNull: false,
        // unique: true,
    },
    location_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    no_gondolas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    fence_YN: {
        type: Sequelize.CHAR(1),
    },
    electricity_YN: {
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
};
module.exports = Apiary