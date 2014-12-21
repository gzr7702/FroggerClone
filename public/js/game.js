var Game = function () {
    this.score = 0;
    this.level = 1;
};

Game.prototype.update = function () {
    document.write('<h1>' + this.score + '</h1>');
};