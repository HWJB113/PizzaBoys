const express = require('express');
const router = express.Router();
const data_b = require('../Config/database');
const Player = require('../Models/player_model');
const Team = require('../Models/team_model');
const crypt = require('bcryptjs');

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

    crypt.genSalt(7, function(error, salt) {
        crypt.hash(Password, salt, function(error, hashed) {
            if (error) {
                res.status(500).send("Internal error")
            }
        })

        Player.create({
                Username,
                Password: hashed,
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

    })
})




router.post('/login', (req, res) => {
    const { Username, Password } = req.body;

    Player.findOne({ where: Username }).then(Player => {
        var hashed = Player.Password;
        crypt.compare(Password, hashed, function(err, hash) {
            if (err || !hash) {
                res.status(500).send("Internal error")
            }

            res.send(Player)
        })
    })
})


router.post("/scoreupdate", (req, res) => {
    const { Username, HighScore } = req.body;
    Player.update({
            HighScore
        }, {
            where: {
                Username
            }
        })
        .then(Player => res.send(Player))
        .catch(err => res.status(500).send(err));
})

moudle.exports = router;