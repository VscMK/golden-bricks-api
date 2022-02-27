'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Queen = db.define('queen', {
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
    colony_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'colony',
            key: 'id'
        }
    },
    color_plate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    queen_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    queen_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    clipped_YN: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    mating_status: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    marked_YN: {
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
Queen.associate = function(models) {
    // associations can be defined here
};
module.exports = Queen