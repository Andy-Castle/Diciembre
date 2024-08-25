//scoping
let globalAge = 23; //esto es una variable global

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
  var varAge = 34; //esto es una función con variable scoped

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    //Aqui la variable solo existe aqui adentro
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
console.log(varAge);
