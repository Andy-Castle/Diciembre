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

player1.sayName();
player2.sayName();
