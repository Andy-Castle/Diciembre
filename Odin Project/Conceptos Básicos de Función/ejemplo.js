function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("Fish"));

function sum(param1, param2) {
  return param1 + param2;
}

console.log(sum(1, 2));

function add7(param) {
  return param + 7;
}

console.log(add7(8));

function multiply(param1, param2) {
  return param1 * param2;
}

console.log(multiply(7, 8));

function capitalize(param) {
  return param[0].toUpperCase() + param.slice(1);
}

console.log(capitalize("andy"));

function lastLetter(param) {
  return param.slice(param.length - 1);
}

console.log(lastLetter("abcd"));
