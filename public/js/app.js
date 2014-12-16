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
    //assign random speed
    this.speed = enemySpeed[Math.floor(Math.random() * 5)];
    
    this.maxX = canvasWidth;
    this.minX = -25;
    this.border = {
        'left': this.x - 50,
        'right': this.x + 50,
        'top': this.y - 85,
        'bottom': this.y + 85,
    }
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
    this.maxX = canvasWidth - 125;
    this.maxY = canvasHeight - 300;
    this.minX = 0;
    this.minY = 0;
    this.border = {
        'left': this.x - 50,
        'right': this.x + 50,
        'top': this.y - 85,
        'bottom': this.y + 85,
    }
};

Player.prototype.update = function (dt) {
    //this.x = this.x + (this.speed * dt);
    if (collisionDetected()) {
        this.x = 300;
        this.y = 325;
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {
    console.log(this.x + ' ' + this.y)
    var moveInterval = 25;
    switch (keyCode) {
        case 'left':
            if (this.x  <= this.minX) {
                break;
            }
            this.x -= moveInterval;
            break;
        case 'right':
            if (this.x >= this.maxX) {
                break;
            }
            this.x += moveInterval;
            break;
        case 'up':
            if (this.y <= this.minY) {
                break;
            }
            this.y -= moveInterval;
            break;
        case 'down':
            if (this.y >= this.maxY) {
                break;
            }
            this.y += moveInterval;
            break;
        default:
            break;
    }
};
    
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

function collisionDetected (player, eenemy, border) {
    //detect collision
    //border is relation of player to enemy: top or left
    switch (border) {
        case 'left':
            if (player.border.left <= enemy.border.right) {
                console.log("collision on player left, enemy right")
            }
        case 'top':
            if (player.border.left <= enemy.border.right) {
                console.log("collision on player left, enemy right")
            }
    }

}

