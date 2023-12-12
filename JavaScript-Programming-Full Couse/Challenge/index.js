// let person = {
//     name: "Andy",
//     age: 24,
//     country: "México",
// };

// function logData() {
//     let data = `${person.name} is ${person.age} years old and lives in ${person.country}`;
//     return data;
// }

// console.log(logData());

//

// let age = 25;
// if (age < 6) {
//     console.log("Free");
// } else if (age < 18) {
//     console.log("Child discount");
// } else if (age < 27) {
//     console.log("Student discount");
// } else if (age < 67) {
//     console.log("Full price");
// } else {
//     console.log("Senior citizen disocunt");
// }

//

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// console.log("The 5 largest countries in the world: ");
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

//

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.shift(); //remueve el primer elemento de un arrelgo
// largeCountries.unshift("China"); // añade a un elemento al inicio del arreglo
// largeCountries.pop(); //remueve el ultimo elemento del arreglo
// largeCountries.push("Pakistan"); // añade el elemento al final del arreglo

// console.log(largeCountries);

//

// let dayOfMonth = 31;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("🙀");
// } else {
//     console.log("🥳");
// }

//

// let hands = ["rock", "paper", "scissor"];
// function getHand() {
//     game = Math.floor(Math.random() * 3);
//     return hands[game];
//     // if (game === 0) {
//     //     return hands[0];
//     // } else if (game === 1) {
//     //     return hands[1];
//     // } else {
//     //     return hands[2];
//     // }
// }
// console.log(getHand());

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
        appleShelf.textContent += fruit[i];
        //appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
        orangeShelf.textContent += fruit[i];
        //orangeShelf.textContent += "🍊";
    }
}
