//routes go here

//var Scores = require('.models/scores');

app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); 
    });