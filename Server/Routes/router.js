const express = require('express');
const router = express.Router();
const data_b = require('../Config/database');
const Player = require('../Models/player_model');
const Team = require('../Models/team_model');
const crypt = require('bcryptjs');
const bodyParser = require('body-parser');
var app = express();



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://PizzaBoys:PizzaPizza@pizzaboys-lbq8c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  db.mycol.insert({
   _id: ObjectId(7df78ad8902c),
   Username: 'MongoDB Overview', 
   Pasword: 'MongoDB is no sql database',
   CurrentScore: 600,
   HighScore: 1000
   Team: 2
})
  client.close();
});





app.use(session({
	secret: 'pizzatime',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	response.sendFile(path.join(__dirname + '/sign_in.html'));
});

function teamAssign() {
    team = Math.floor(Math.random() * 2) + 1;
    return team;

}

app.post('/signup', (request, response) => {
    var Username = request.body.Username
	var Password = request.body.Password

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
    alert("FUCKKKKKKKK");
})




app.post('/login', (request, response) => {
    var Username = request.body.Username
	var Password = request.body.Password

	if(Username && Password) {
		connection.query('SELECT * FROM Player WHERE Username = ? AND Password = ?', [Username, Password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = Username;
				response.redirect('/game');
			} else {
				response.send('Wrong username/password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter usename and password');
		response.end();
	}
});

app.get('/game', function(request, response) {
	if (request.session.loggedin) {
		re
	}
})
  //  Player.findOne({ where: Username }).then(Player => {
    //    var hashed = Player.Password;
      //  crypt.compare(Password, hashed, function(err, hash) {
       //     if (err || !hash) {
         //       res.status(500).send("Internal error")
           // }
		   //
           // res.send(Player)
       // })
   // })
//})


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