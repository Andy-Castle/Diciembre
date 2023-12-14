// const player = "Andy";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;
// points += 100;
// hasWon = true;
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

//

// let myCourses = [
//     "Learn CSS Animations",
//     "UI Design Fundamentals",
//     "Intro to Clean Code",
// ];
// function logItem(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// logItem(myCourses);

//

// let profile = ["Andy", "Isaac", "Castillo", "Cordova"];
// // localStorage.setItem("Saving", JSON.stringify(profile));
// let = show = JSON.parse(localStorage.getItem("Saving"));
// console.log(show);

//

// let data = [
//     {
//         player: "Jane",
//         score: 52,
//     },
//     {
//         player: "Mark",
//         score: 41,
//     },
// ];
// const logBtn = document.getElementById("log-btn");
// logBtn.addEventListener("click", function () {
//     console.log(data[0].score);
// });

//

// let sentence = "largest countries ";
// let countries = ["China", "India", "USA"];
// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `;
//     const lastIndex = arr.length - 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i];
//         } else {
//             baseString += arr[i] + ", ";
//         }
//     }
//     return baseString;
// }
// const completesentence = generateSentence(sentence, countries);
// console.log(completesentence);

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const container = document.getElementById("container");
function renderImages() {
    let imgsItems = "";
    for (let i = 0; i < imgs.length; i++) {
        imgsItems += `<img alt="Employee in the company" class="team-img" src=${imgs[i]}>`;
    }
    container.innerHTML = imgsItems;
}
renderImages();
