var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/crud";
var express= require('express');
var router = express.Router();

router.get('/',function(res,req){
    MongoClient.connect(url, function(err, db) {
        //console.log("call");
        if(err) throw err;
        var dbo = db.db("crud");
        var myVal = {e_id : 444};
        dbo.collection("employee").deleteOne(myVal, function(err, res) {
            if (err) throw err;
            console.log("Data Deleted successfully");
            //response.render('page/login');
                //response.sendFile(path.join(__dirname + '/login.html'));
        });
    });
});

module.exports=router;

