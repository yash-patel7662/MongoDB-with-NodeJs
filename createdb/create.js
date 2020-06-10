var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/crud";
var app= require('express');


app.get('/viewemployee', function(req, res) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MDS");
        dbo.collection("employee").find({}).toArray(function(err, result) {
            if (err) throw err;
            //res.render('admin/viewStudent',{studentdata:result});
            console.log(result);
            db.close();
        });
    });

});


/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

module.exports=module.MongoClient('./');*/