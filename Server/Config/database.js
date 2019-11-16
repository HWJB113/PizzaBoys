const Sequelize = require('sequelize');

moudle.exports = new Sequelize('pizzaboys', 'ljs11', 'pizza123', {
    host: 'localhost',
    dialect: 'mysql'
});