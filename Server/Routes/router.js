//const express = require('express');
//const router = express.Router();
//const data_b = require('../Config/database');
//const Player = require('../Models/player_model');
//const Team = require('../Models/team_model');
//const crypt = require('bcryptjs');
//const bodyParser = require('body-parser');
//var app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://PizzaBoys:PizzaPizza@pizzaboys-lbq8c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

function sign_up(){
    MongoClient.connect(uri, function(err, db){
        if (err) throw err;
        var dbo = db.db("PizzaBoys");
        var myobj = {Username: "Tobey_Maguire" , Password: "Tobey", CurrentScore: 0, HighScore: 0, Team: 1}
        dbo.collection("Players").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Player added");
            db.close()
        });
    });

}

function sign_in(){
    MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        var User = document.getElementById("user").value;
        var Pass = document.getElementById("pass").value;
        var dbo = db.db("PizzaBoys");
        var query = { Username: User, Password: Pass }
        dbo.collection("Players").find(query).toArray(function(err,result) {
            if(err) throw alert("Incorrect Username or Password!");
            
            db.close();
        })
    })
}

