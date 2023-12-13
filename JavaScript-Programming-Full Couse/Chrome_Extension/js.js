// const credits = 0;

// if (credits) {
//     console.log("Let's play");
// } else {
//     console.log("Sorry, you have no credits");
// }

//truthy
//falsy

//false
//0
//""
//null -> how you as a developer signalize emptiness
//undefined -> hoy JavaScript signalizes emptiness
//NaN

// let currentViewers = null;

// currentViewers = ["Andy", "Jaime"];

// currentViewers = null;

// if (currentViewers) {
//     console.log("We have viewers");
// }

// let trueOrFalse = Boolean("");

// console.log(trueOrFalse);
//false
//true
//true
//false
//true
//false

const welcomeEl = document.getElementById("welcome-el");

let myName = "Andy";
let myBack = "Welcome Back, ";
let myEmoji = "🥳";

function greetUser(name, back, emoji) {
    welcomeEl.textContent = `${back} ${name} ${emoji} `;
}

greetUser(myName, myBack, myEmoji);
