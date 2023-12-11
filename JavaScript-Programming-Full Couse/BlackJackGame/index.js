// let age = 21;
// if (age < 21) {
//     console.log("You can not enter the club!");
// } else {
//     console.log("Welcome!");
// }
// let age = 100;

// if (age < 100) {
//     console.log("Not elegible");
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!");
// } else {
//     console.log("Not elegible, you have already gotten one");
// }
//false
//true
//false
//false
//true
//true
//false
// let featuredPosts = [
//     "Checl out my netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portafolio",
// ];
// console.log(featuredPosts[2]);
// console.log(featuredPosts.length);
// let profile = [
//     "Ingeniero en desarrollo de software",
//     "FreeCodeCamp Certificados",
//     "Scrimba Certificados",
//     "Javascript",
//     "Python",
//     "Dart",
//     "NodeJS",
//     "PocketBase",
//     "Flutter",
// ];
// let mySelf = ["Andy", 24, true];
// let cards = [7, 4];
// cards.push(6);
// console.log(cards);
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portafolio lately",
// ];
// let newMessage = "Same here!";
// messages.push(newMessage);
// messages.pop();
// console.log(messages);
// for (let count = 10; count < 21; count += 1) {
//     console.log(count);
// }
// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }
// for (let count = 10; count <= 100; count += 10) {
//     console.log(count);
// }
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portafolio lately",
//     "Same here!",
//     "Great to hear!",
//     "XD",
// ];
// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i]);
// }
// let cards = [7, 3, 9];
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);
// }
let sentence = ["Hello ", "my ", "name ", "is ", "Andy"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent = sentence[i];
    console.log(sentence[i]);
}

//
// let firstCard = 10;
// let secondCard = 4;
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");
// //let sumEl = document.querySelector("#sum-el");

// function startGame() {
//     renderGame();
// }

// function renderGame() {
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?";
//     } else if (sum === 21) {
//         message = "You've got Blackjack";
//         hasBlackJack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
//     sumEl.textContent = "Sum: " + sum;
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
// }

// function newCard() {
//     let thirdCard = 3;
//     sum += thirdCard;
//     cards.push(thirdCard);
//     renderGame();
// }
