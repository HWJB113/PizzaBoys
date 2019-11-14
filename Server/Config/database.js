const Sequelize = require('sequelize');

var sequelize = new Sequelize('pizzaboys', 'ljs11', 'pizza123', {
    host: 'localhost',
    dialect: 'mysql',
});