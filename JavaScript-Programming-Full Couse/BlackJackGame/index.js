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
// let sentence = ["Hello ", "my ", "name ", "is ", "Andy"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent = sentence[i];
//     console.log(sentence[i]);
// }
// let player1Time = 102;
// let player2Time = 107;
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time;
//     } else if (player2Time < player1Time) {
//         return player2Time;
//     } else {
//         return player1Time;
//     }
// }
// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);
// function totalRace() {
//     return player1Time + player2Time;
// }
// let sumTotalRace = totalRace();
// console.log(sumTotalRace);
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }
// let dice = rollDice();
// console.log(dice);
// let flooredNumber = Math.floor(3.45632);
// console.log(flooredNumber);
// let hasCompletedCourse = true;
// let givesCertificate = true;
// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate();
// }
// function generateCertificate() {
//     console.log("Generating certificate...");
// }
// let hasSolvedChallenge = false;
// let hasHintsLeft = false;
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution();
// }
// function showSolution() {
//     console.log("Showing the solution...");
// }
// let likesDocumentaries = true;
// let likesStartups = false;
// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie();
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!");
// }
// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Herald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"],
// };
// console.log(course.tags);
// let airbnbCastle = {
//     title: "Kilcolgan",
//     price: 11231,
//     isRented: false,
//     offer: ["Vista al lago", "Vistas al jardín", "Wifi"],
// };
// console.log(airbnbCastle.offer);
// console.log(airbnbCastle.title);

//
let player = {
    name: "Per",
    chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random > 10) {
        return 10;
    } else if (random === 1) {
        return 11;
    } else {
        return random;
    }
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    messageEl.textContent = message;

    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
        lossMoney();
        winMoney();
    }
}

function lossMoney() {
    if (isAlive === false) {
        playerEl.textContent = player.name + ": $" + (player.chips -= 10);
    }
}

function winMoney() {
    if (isAlive === true && hasBlackJack === true) {
        playerEl.textContent = player.name + ": $" + (player.chips += 10);
    }
}
