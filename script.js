"use strict";
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " бежит!");
};

function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " мяукает!");
};

let cat = new Cat("Кот");

function Dog(name) {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " виляет хвостом!");
};

let dog = new Dog("Собака");

function Rooster(name) {
  Animal.apply(this, arguments);
}

Rooster.prototype = Object.create(Animal.prototype);
Rooster.prototype.constructor = Rooster;

Rooster.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " кукарекает!");
};

let rooster = new Rooster("Петух");

function Snake(name) {
  Animal.apply(this, arguments);
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.run = function () {
  alert(this.name + " ползёт!");
};

let snake = new Snake("Змея");

function Elephant(name) {
  Animal.apply(this, arguments);
}

Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " трубит хоботом!");
};

let elephant = new Elephant("Слон");

let animals = [cat, dog, rooster, snake, elephant];
for (let i = 0; i < animals.length; i++) {
  animals[i].run();
}
