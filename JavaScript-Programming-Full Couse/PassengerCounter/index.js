//document.getElementById("count-el").innerText = 5;
// let myAge = 24;
// console.log(myAge);
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);
// let myAge = 24;
// let humanDogRatio = 7;
// myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
// let count = 5;
// count = count + 1;
// console.log(count);
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();
// function fourytwo() {
//     console.log(42);
// }
// fourytwo();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function sumPlaces() {
//     let totalLap = lap1 + lap2 + lap3;
//     console.log(totalLap);
// }
// sumPlaces();
// let lapsCompleted = 0;
// function LapIncrement() {
//     lapsCompleted++;
// }
// LapIncrement();
// console.log(lapsCompleted);
// LapIncrement();
// console.log(lapsCompleted);
// LapIncrement();
// console.log(lapsCompleted);
// let username = "per";
// console.log(username);
// let notification = "You have tree new notifications";
// let messageToUser = notification + ", " + username + "!";
// console.log(messageToUser);
// let name = 42;
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);
// let points = 4;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;
// console.log(totalPoints);
// let welcomeEl = document.getElementById("welcome-el");
// let name = "Andy";
// let greeting = "Bienvenido de vuelta ";
// name += "👍";
// let Greetings = greeting + name;
// welcomeEl.innerText = Greetings;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}
