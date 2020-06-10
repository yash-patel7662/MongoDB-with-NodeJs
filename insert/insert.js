/*var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

//mongodb client
var techinfo = mongodb.MongoClient;

router.post('/',(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;


    var obj={
        "e_id" : e_id,
        "e_name" : e_name,
        "e_sal" : e_sal
    };

    techinfo.connect('mongodb://localhost:27017/crud',(err,db)=>{
        db.collection('employee').insertOne(obj,function(err,result){
            console.log("call");
            if(err)
            {
                res.send({"insert":"fail"});
            }
            else{
                res.send({"insert":"success"});
            }
        });
    });
});


module.exports=router;*/

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/crud";
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    //if(username && password){
    MongoClient.connect(url, function (err, db) {
        //console.log("call");
        if (err) throw err;
        var dbo = db.db("crud");
        var myObj = { e_id: 444, e_name: "jhon", e_sal: 100000 };
        dbo.collection("employee").insertOne(myObj, function (err, res) {
            if (err) throw err;
            console.log("Data inserted successfully");
            //response.render('page/login');
            //response.sendFile(path.join(__dirname + '/login.html'));
        });
    });
    //}
});

module.exports = router;