var express = require('express');
var bodyparser = require('body-parser');
var mongodb = require('mongodb');
var cors = require('cors');

//express object
var app = express();

//convert body-parser into jason
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

/*app.get('/',function (req,res) {
    res.render('page/index');
});*/

//fetch fetch.js file
//var fetch= require('./fetch/fetch');
//app.use('/fetch',fetch);

//fetch insert.js file
var insert = require('./insert/insert');
app.use('/insert',insert);

//var update = require('./update/update');
//app.use('/update',update);

/*var del = require('./delete/delete');
app.use('/delete',del);*/


app.listen(8080);
console.log('server running on port no 8080');