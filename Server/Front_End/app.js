var express = require("express");
var bodyParser = require("body-parser");
var crypt = require("bcryptjs");
var session = require("express-session");
const uri = "mongodb+srv://PizzaBoys:PizzaPizza@pizzaboys-lbq8c.azure.mongodb.net/test?retryWrites=true&w=majority";

const mongoose = require('mongoose');
mongoose.connect(uri, { dbName: "PizzaBoys" });
//conenects the database and tells the program to use the database called "PizzaBoys"
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
    console.log("connection succeeded");
})

var app = express()
app.use(express.static(__dirname))
    //tells the program that the redirects being use are in the same directory so it can find the correct files

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//setting up the body parser to allow info to be passed between files for registration

app.post('/signup', function(req, res) {
    var name = req.body.user;
    var pass = req.body.pass;
    //sets the variables being passed into the database as the inputs of the fields in the form in "sign_up.html"

    crypt.hash(pass, 10, function(error, hashed) {
        if (error) {
            res.status(500).send("Internal error")
        }
        //uses bcrypt to hash the password
        pass = hashed;
        //sets the variable of pass to the hased version of the password
        var data = {
                "Username": name,
                "Password": pass,
                "HighScore": 0
            }
            //sets up the entry getting inputted into the mongoDB database

        db.collection('Players').insertOne(data, function(err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");

        });
        //this inserts the data into the table of "Players" and sends a message to the console so we know it was successful
    })

    return res.redirect('home_page.html');
    //this then sends the user back to the home_page as we couldn't get it to go directly to the gamepage, so it would send them back allowing them to then login with their
    //newly created account 
})

app.post('/login', function(req, res) {
    var name = req.body.user;
    var pass = req.body.pass;
    var Players = db.collection('Players');
    //this would do a similar thing to the signup function and take the data inputted into the form and make them into variables using body-parser


    crypt.compare(pass, Players.Password, function(err, result) {
        //this is a built in bcyrpt function that compares the hashed password and inputted password, however i couldn't get this fully working so unforunately it doesn't work
        if (result) {
            pass = result;

            var query = {
                    "Username": name,
                    "Password": pass,
                    "HighScore": 0
                }
                //as i couldn't fully figure out a login in system i had it set up to query the database using the hashed password, however as it didn't work this also doesn't work
            db.collection('Players').find(query, function(err, collection) {
                if (err) throw err;
                console.log("Login Sucessful!");

            });
            //as a test this function would just return the player's database entry instead adding them to a game session
            return res.redirect('game.html');
            //this would've redirected them into the game state and allowed them to play the game

        }
        return res.redirect("home_page.html");
        //a basic error catch was to just send the user back to the homepage if the passwords didn't match (just for easy testing)
    })
})

app.get('/', function(req, res) {
        res.set({
            'Access-control-Allow-Origin': '*'
        });
        return res.redirect('sign_up.html');
    }).listen(5000)
    //set up the listening ports

console.log("server listening at port 5000");