/* 
* This is the player class
* it creates one player that is used for the entire game.
*/

var Player = function (name) {
    this.sprite = 'images/char-boy.png';
    this.score = 0;
    this.x = 300;
    this.y = 325;
    this.width = 66;
    this.height = 77;
    this.maxX = ctx.canvas.width - 125;
    this.maxY = ctx.canvas.height - 300;
    this.minX = 100;
    this.minY = -100;
};

Player.prototype.update = function (dt) {
    //this.x = this.x + (this.speed * dt);
    this.checkCollisions();
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

Player.prototype.checkCollisions = function () {
    if (this.y === this.minY) {
        // increment score and reset if the player is on the water
        this.score++;
        console.log(this.score);
        this.reset();
    } else if (this.y > 50 || this.y < 225) {
        var self = this;
        allEnemies.forEach(function(enemy) {
            // check if bug is on the same row as the player
            if (enemy.y === self.y) {
                // is the bug on the player?
                 if (self.x < enemy.x + enemy.width &&
                       self.x + self.width > enemy.x &&
                       self.y < enemy.y + enemy.height &&
                       self.height + self.y > enemy.y) {
                        //console.log("collision detected!")
                        self.reset();
                }
            }
        });
    }
};

Player.prototype.reset = function () {
    //this.x = 300;
    this.y = 325;
};