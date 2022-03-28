// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Role extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     }
//     Role.init({
//         name: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'Team',
//     });
//     return Role;
// };


'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Team = db.define('Teams', {
    team_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    manager_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    apiary_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },

}, {
    freezeTableName: true,
});
Team.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Apiary)
    User.hasMany(models.User)
};
module.exports = Team