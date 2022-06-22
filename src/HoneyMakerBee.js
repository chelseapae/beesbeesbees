var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.food;
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.eat;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}