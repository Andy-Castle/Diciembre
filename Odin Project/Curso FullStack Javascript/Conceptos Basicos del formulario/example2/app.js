const name = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener("click", (event) => {
  greetingOutput.innerHTML = `Hello ${name.value}`;
});
