const sequelize = require('sequelize');
const data_b = require('../Config/database.js')


var Player = sequelize.define('Player', {
    UserName: {
        type: sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    Password: {
        type: sequelize.STRING
    },
    CurrentScore: {
        type: sequelize.INTEGER
    },
    HighScore: {
        type: sequelize.INTEGER
    },
    Team: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

var Team = sequelize.define('Team', {
    TeamNum: {
        type: sequelize.INTEGER,
    },
    TeamScore: {
        type: sequelize.INTEGER
    },
    NumOfPlayers: {
        type: sequelize.INTEGER
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