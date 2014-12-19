"use strict";

var enemySpeed = [25, 50, 75, 150, 250];
var enemyY = [60, 143, 225];

var canvasHeight = ctx.canvas.height;
var canvasWidth = ctx.canvas.width;


var Enemy = function () {
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    //assign random row
    this.y = enemyY[Math.floor(Math.random() * 3)];
    this.width = 101;
    this.height = 171;
    //assign random speed
    this.speed = enemySpeed[Math.floor(Math.random() * 5)];
    
    this.maxX = canvasWidth;
    this.minX = -25;
};

Enemy.prototype.update = function (dt) {
    //multiply any movement by the dt parameter (timedelta) which will
    //ensure the game runs at the same speed for all computers

    //check for x border and restart enemy at the beginning
    if (this.x >= this.maxX) {
        this.x = 0;
    } else {
        this.x = this.x + (this.speed * dt);
    }
};

Enemy.prototype.render = function () {
    // Draw the enemy on the screen
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (name) {
    this.sprite = 'images/char-boy.png';
    this.x = 300;
    this.y = 325;
    this.width = 101;
    this.height = 171;
    this.maxX = canvasWidth - 125;
    this.maxY = canvasHeight - 300;
    this.minX = 100;
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
    var moveY = 85;
    var moveX = 98;
    switch (keyCode) {
        case 'left':
            if (this.x  <= this.minX) {
                break;
            }
            this.x -= moveX;
            break;
        case 'right':
            if (this.x >= this.maxX) {
                break;
            }
            this.x += moveX;
            break;
        case 'up':
            if (this.y <= this.minY) {
                break;
            }
            this.y -= moveY;
            break;
        case 'down':
            if (this.y >= this.maxY) {
                break;
            }
            this.y += moveY;
            break;
        default:
            break;
    }
};

Player.prototype.checkCollisions = function() {
    //console.log('this ' + this);
    if (this.y > 50 || this.y > 225) {
        var self = this;
        allEnemies.forEach(function(enemy) {
            // is the bug on the same row as the player?
            //if (enemy.y === self.y) {
                // is the bug on the player?
                 if (player.x < enemy.x + enemy.width &&
                       player.x + player.width > enemy.x &&
                       player.y < enemy.y + enemy.height &&
                       player.height + player.y > enemy.y) {
                        console.log("collision detected!")
                        //self.reset();
                }
            //}
        });
    }
}
    
var player = new Player();
    
//create enemies
var numEnemies = 10;
var allEnemies = [];
for (var i=0; i < numEnemies; i++) {
    allEnemies.push(new Enemy());
}

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

   

