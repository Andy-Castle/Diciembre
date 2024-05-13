const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Gleen",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, ludwig",
  "Begin, Menachen",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Metodo filter

//Esta es mi forma
const bornIn1500s = inventors.filter((age) => age.year < 1600 && age.year >= 1500);
// console.log(bornIn1500s);

//Esta es una alternativa
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
// console.table(fifteen);

// Metodo Map

//Esta es mi forma
const fullName = inventors.map(
  (completeName) => `${completeName.first} ${completeName.last}`
);
// console.log(fullName);

//Esta es una alternativa
const fullNames = inventors.map(
  (completeName) => completeName.first + " " + completeName.last
);
// console.log(fullNames);

//Metodo sort
const oldToYoung = inventors.sort(function (person1, person2) {
  if (person1.year > person2.year) {
    return 1;
  } else {
    return -1;
  }
});

const ordered = inventors.sort((person1, person2) =>
  person1.year > person2.year ? 1 : -1
);

// console.table(oldToYoung);

//Metodo reduce
const manyYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(manyYears);

//Metodo sort
const oldest = inventors.sort(function (person1, person2) {
  const lastGuy = person1.passed - person1.year;
  const nexGuy = person2.passed - person2.year;
  return lastGuy > nexGuy ? -1 : 1;
  // if (lastGuy > nexGuy) {
  //   return -1;
  // } else {
  //   return 1;
  // }
});

// console.log(oldest);

//Crear una lista que contengan la palabra "de"
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

//Metodo sort
//sort la people alfabeticamente por apellido
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");

  return aLast > bLast ? 1 : -1;
});
// console.log(alpha);

// Metodo Reduce
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
