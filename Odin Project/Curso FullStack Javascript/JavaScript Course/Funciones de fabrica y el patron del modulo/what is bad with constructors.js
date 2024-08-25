//Funciones de fábrica
const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
};
// hey, this is a constructor -
// then this can be refactored into a factory!

//Esta es una forma de hacer objetos sin la palabra "new"
function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}
//Esta seria una mejor forma
// and that's very similar, except since it's just a function,
// we don't need a new keyword

console.log(new User("Andy"));

console.log(createUser("Frida"));

const name = "Bob";
const age = 28;
const color = "Red";

const thatObject = { name: name, age: age, color: color };
console.log(thatObject);

const nowFancyObject = { name, age, color }; //esta es una forma abreviada de hacerlo
console.log(nowFancyObject);

// If you wanted to log these values, earlier,
// you would have done the following
console.log(name, age, color);
// which would have resulted in a mess - Bob 28 red

// Try wrapping it in some { curly braces } now,
// which makes it an object!
console.log({ name, age, color });
// now it logs as - { name: "Bob", age: 28, color: "red" }

//Destructuración

const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a); //1
console.log(b); //2
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
console.log(zerothEle); //1
console.log(firstEle); //2
