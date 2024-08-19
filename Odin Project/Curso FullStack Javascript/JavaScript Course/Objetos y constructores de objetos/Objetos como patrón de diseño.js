// ejemplo uno
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//ejemplo dos
const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

function printName(player) {
  console.log(player.name);
}

printName(playerTwo);

//console.log(playerOneName);
//console.log(playerTwoName);

function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winner");
}

gameOver(playerOne);
