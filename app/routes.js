//routes go here

//var Scores = require('.models/scores');


module.exports = function (app) {
	app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); 
    });
};
