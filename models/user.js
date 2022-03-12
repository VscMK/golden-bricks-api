// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         static associate(models) {
//             User.hasOne(models.Role),
//                 User.hasOne(models.Team)
//         }
//     }
//     User.init({
//         user_id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.INTEGER
//         },
//         first_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         last_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         hashed_password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         createdAt: {
//             allowNull: false,
//             type: DataTypes.DATE
//         },
//         updatedAt: {
//             allowNull: false,
//             type: DataTypes.DATE
//         },
//         role_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         team_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     }, {
//         sequelize,
//         modelName: 'User',
//     });
//     return User;
// };

'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database')
const DataTypes = require('sequelize/lib/data-types')

const User = db.define('Users', {
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    hashed_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true,
});
User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Role)
    User.hasOne(models.Team)
};
module.exports = User