const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://PizzaBoys:PizzaPizza@pizzaboys-lbq8c.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

MongoClient.connect(uri, function(err, db){
    if (err) throw err;
    var dbo = db.db("PizzaBoys");
    dbo.createCollection("Test", function(err, res) {
        if (err) throw err;
        console.log("Test added");
        db.close()
    });
});
MongoClient.connect(uri, function(err, db){
    if (err) throw err;
    var dbo = db.db("PizzaBoys");
    var myobj = {Username: "Test" , Password: "Tobey", CurrentScore: 0, HighScore: 10, Team: 1}
    dbo.collection("Test").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Player added");
        db.close()
    });
});