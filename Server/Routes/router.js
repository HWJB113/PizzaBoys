const express = require('express');
const router = express.Router();
const data_b = require('../Config/database');
const Player = require('../Models/player_model');
const Team = require('../Models/team_model');

router.get('/', (req, res) => {
    Player.findAll()
        .then(Player => {
            res.send(Player)
        })
        .catch(err => res.status(500).send(err));
})

function teamAssign() {
    team = Math.floor(Math.random() * 2) + 1;
    return team;

}

router.post('/signup', (req, res) => {
    const { Username, Password } = req.body;

    Player.create({
            Username,
            Password,
            CurrentScore: 0,
            HighScore: 0,
            Team: teamAssign()
        })
        .then(Player => res.send(Player))
        .catch(err => res.status(500).send(err));

    Team.update({
            NumOfPlayers: +1
        }, {
            where: {
                Team
            }
        })
        .then(Team => res.send(Team))
        .catch(err => res.status(500).send(err));


    res.send(req.body)
})

router.post("/login", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

router.post("/scoreupdate", (req, res) => {
    const {Username, HighScore} = req.body;
    Player.update(
        {
            HighScore
        },
        {
            where:{
                Username
            }
        }
    )
    .then(Player => res.send(Player))
    .catch(err => res.status(500).send(err));
})

moudle.exports = router;