function isGameOver() {
  //game over logic goes here!
  if (gameOver) {
    const gameOverDiv = document.createElement("div");
    gameOverDiv.classList.add("game-over");
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}

function isGameOver() {
  //game over logic goes here!
  if (gameOver) {
    DOMStuff.gameOver(this.winner);
  }
}
