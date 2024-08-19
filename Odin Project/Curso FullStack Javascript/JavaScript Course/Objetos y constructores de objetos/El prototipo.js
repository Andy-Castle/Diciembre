function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

//const player = new Player("steve", "X");
//console.log(player.name);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

// player1.sayName();
// player2.sayName();

console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);
console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2));

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

player1.sayHello();
player2.sayHello();

console.log(player1.__proto__ === Player.prototype);
console.log(player2.__proto__ === Player.prototype);

//Herencia prototipica

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);

console.log(player1.valueOf());

console.log(player1.hasOwnProperty("valueOf")); //false

console.log(Object.prototype.hasOwnProperty("valueOf")); //true

console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); //true


