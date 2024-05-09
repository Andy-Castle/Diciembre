const palabra = "Animal loots foliated detail of stool lamina.";

// const palindromes = function (word) {
//   // let wordsArray = word.split("");
//   // let wordsReverse = wordsArray.reverse();
//   // return wordsReverse.join("");
//   let palindromo = word.split("").reverse().join("");
//   console.log(palindromo);
//   if (word == palindromo) {
//     return true;
//   } else {
//     return false;
//   }
// };

const palindromes = function (string) {
  const alphanumerical = "qwertyuiopasdfghjklñzxcvbnm1234567890";

  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reverseString = cleanedString.split("").reverse().join("");

  return cleanedString === reverseString;
};

console.log(palindromes(palabra));
