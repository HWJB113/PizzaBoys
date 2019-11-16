const Sequelize = require('sequelize');
const data_b = require('../Config/database');

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

module.exports = Team;