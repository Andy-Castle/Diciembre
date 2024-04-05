const computerChoiceDisplay = document.getElementById("computer-choice");
const UserChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //tambien puedes usar possibleChoices.length
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }

  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Empate!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Ganaste!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Perdiste!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "Ganaste!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Perdiste!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "Ganaste!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Perdiste!";
  }

  resultDisplay.innerHTML = result;
}
