"use strict";

var canvasHeight = ctx.canvas.height;
var canvasWidth = ctx.canvas.width;

var game = new Game();
var player = new Player();
// create an array of many enemies
var numEnemies = 10;
var allEnemies = [];
for (var i=0; i < numEnemies; i++) {
    allEnemies.push(new Enemy());
}

//handle user input
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

game.update();
