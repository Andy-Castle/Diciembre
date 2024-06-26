// Good
//  function getPlayerScore();
//  function getPlayerName();
//  function getPlayerTag();

// Bad
// function getUserScore();
// function fetchPlayerName();
// function retrievePlayer1Tag();

// Good
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
  return numberOfThings;
}

// Bad (it's a noun)
function myName() {
  return "Thor";
}

const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);
