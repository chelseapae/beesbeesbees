var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.food;
  this.job = 'keep on growing';

};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.eat;
