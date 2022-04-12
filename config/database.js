const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});