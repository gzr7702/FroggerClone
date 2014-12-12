"use strict";

var enemySpeed = [25, 50, 75, 250, 300];
var enemyY = [60, 143, 225];
/*
var maxX = 505 - 60;
var maxY = 606 - 30;
var minX = -1;
var minY = 0;
*/

//console.log(ctx)

// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    //assign random row
    this.y = enemyY[Math.floor(Math.random() * 3)];
    //assign random speed
    this.speed = enemySpeed[Math.floor(Math.random() * 5)];
    
    this.maxX = 505; //need to use ctx.width here, but can't get ctx
    this.minX = -25;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= this.maxX) {
        this.x = 0;
    } else {
        this.x = this.x + (this.speed * dt);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (name) {
    this.sprite = 'images/char-boy.png';
    this.x = 300;
    this.y = 325;
    this.maxX = 505 - 60;
    this.maxY = 606 - 30;
    this.minX = -1;
    this.minY = 0;
};

Player.prototype.update = function (dt) {
    //this.x = this.x + (this.speed * dt);
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {
    console.log(this.x + ' ' + this.y)
    switch (keyCode) {
        case 'left':
            if (this.x  <= this.minX) {
                break;
            }
            this.x -= 25;
            break;
        case 'right':
            if (this.x >= this.maxX) {
                break;
            }
            this.x += 25;
            break;
        case 'up':
            if (this.y <= this.minY) {
                break;
            }
            this.y -= 50;
            break;
        case 'down':
            if (this.y >= this.maxY) {
                break;
            }
            this.y += 50;
            break;
        default:
            break;
    }
};
    

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
    
//create enemies
var numEnemies = 10;
var allEnemies = [];
for (var i=0; i < numEnemies; i++) {
    allEnemies.push(new Enemy());
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
