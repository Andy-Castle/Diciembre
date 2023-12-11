let catName = "Maki";
let quote;

function catTalk(cat) {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow";
    return catName && quote;
}

//console.log(catTalk());

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}

console.log(checkScope());
