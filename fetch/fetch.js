/*var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

//mongodb client
var techinfo = mongodb.MongoClient;

//create rest api
router.get('/',(req,res)=>{
    techinfo.connect('mongodb://localhost:27017/crud',(err,db)=>{
        db.collection('employee').find().ToArray((err,array)=>{
            res.send(array);
        });
    });
});

//export the module
module.exports=router; */


var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/crud";
var express= require('express');
var router=express.Router();

var xlsx = require("xlsx");

router.get('/', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("crud");
        dbo.collection("employee").find({}).toArray(function(err, result) {
            if (err) throw err;
            //res.render('admin/viewStudent',{studentdata:result});
            console.log(result);

            //mongodb data store into excel file
            /*var newWB = xlsx.utils.book_new();
            var newWS = xlsx.utils.json_to_sheet(result);
            xlsx.utils.book_append_sheet(newWB,newWS,"New Data");

            xlsx.writeFile(newWB,"New Data File.xlsx");*/

            db.close();
        });
    });
});

module.exports=router;
