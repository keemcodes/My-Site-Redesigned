const { Sequelize } = require('sequelize');

const db = new Sequelize('sql_hr', 'newuser', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db
