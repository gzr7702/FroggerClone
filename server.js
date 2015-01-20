//set vars-----------------------------------------------------------
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
//hooks for mongodb
/*
var mongoose = require('mongoose');
var database = require('./config/database');
*/

//config--------------------------------------------------------------
//mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));
	
//routes--------------------------------------------------------------
require('./app/routes.js');

//start app ----------------------------------------------------------
app.listen(port);
console.log("Running at localhost:" + port);
