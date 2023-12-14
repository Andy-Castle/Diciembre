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

// const welcomeEl = document.getElementById("welcome-el");

//                    parametros
// function greetUser(name, back, emoji) {
//     welcomeEl.textContent = `${back} ${name} ${emoji}`;
// }
// //            argumentos
// greetUser("Andy", "Welcome Back, ", "🥳");

// function add(num1, num2) {
//     return num1 + num2;
// }

// add(3, 4);

// //parameters
// //arguments
// //parameters
// //arguments

function getFirst(arr) {
    return arr[0];
}

console.log(getFirst(["Andy", "Isaac", "Castillo", "Cordova"]));
