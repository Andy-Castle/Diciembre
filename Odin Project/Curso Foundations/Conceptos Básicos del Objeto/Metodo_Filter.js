function isOdd(num) {
  return num % 2 !== 0;
}

const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);

console.log(oddNums); // esto saldra [ 1, 3, 5 ]
console.log(arr); // esto saldra [ 1, 2, 3, 4, 5 ]
