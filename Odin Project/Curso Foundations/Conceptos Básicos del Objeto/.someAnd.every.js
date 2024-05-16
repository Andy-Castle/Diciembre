const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Iriv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

//Some and Ecery Checks
//Array.prototype.some() is at least one person 19?
const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

const isAdult2 = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(isAdult); //true
console.log(isAdult2); //true

//Array.prototype.every() is every 19?
const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log(allAdults); //false
