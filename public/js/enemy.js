/* 
* This is the enemy class. It is used to create multiple enemies.
*/

var speedChoices = [25, 75, 150, 200];
//var speedChoices = [25, 50, 75, 100, 150, 200, 250];
var yPoint = [70, 155, 240];

var Enemy = function () {
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    //assign random row
    this.y = yPoint[Math.floor(Math.random() * 3)];
    this.width = 76;
    this.height = 67;
    //assign random speed
    this.speed = speedChoices[Math.floor(Math.random() * 5)];
    
    this.maxX = ctx.canvas.width;
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
