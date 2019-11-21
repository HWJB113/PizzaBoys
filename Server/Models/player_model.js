const Sequelize = require('sequelize');
const data_b = require('../Config/database');


var Player = data_b.define('Player', {
    UserName: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Password: {
        type: Sequelize.STRING
    },
    CurrentScore: {
        type: Sequelize.INTEGER
    },
    HighScore: {
        type: Sequelize.INTEGER
    },
    Team: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true
})

module.exports = Player;