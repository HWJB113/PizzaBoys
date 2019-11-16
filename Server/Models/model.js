const Sequelize = require('sequelize');
const data_b = require('../Config/database.js');


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
    freezeTableName: true // Model tableName will be the same as the model name
});

var Team = data_b.define('Team', {
    TeamNum: {
        type: Sequelize.INTEGER,
    },
    TeamScore: {
        type: Sequelize.INTEGER
    },
    NumOfPlayers: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

Player.sync({ force: true }).then(function() {
    // Table created
    return Player.create({
        UserName: 'spidey',
        Password: 'boab',
        CurrentScore: 50,
        HighScore: 150,
        Team: 1
    });
});