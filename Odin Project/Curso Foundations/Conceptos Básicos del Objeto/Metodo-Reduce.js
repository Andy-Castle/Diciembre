const arr = [1, 2, 3, 4, 5];

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);

console.log(productOfAllNums); // lo que da 120

console.log(arr); // lo que da [ 1, 2, 3, 4, 5 ]
