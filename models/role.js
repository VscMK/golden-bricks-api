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
//         role_id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: sequelize.INTEGER
//         },
//         name: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'Role',
//     });
//     return Role;
// };


'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const Role = db.define('Roles', {
    role_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
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
Role.associate = function(models) {
    // associations can be defined here
};
module.exports = Role