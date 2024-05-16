function addOne(num) {
  return num + 1;
}

const arr = [1, 2, 3, 4, 5];

const mappedArr = arr.map(addOne);

console.log(arr); // la matriz original no cambia [ 1, 2, 3, 4, 5 ]
console.log(mappedArr); // esto es lo que saldria [ 2, 3, 4, 5, 6 ]

// Una forma mas sencilla

const arr2 = [1, 2, 3, 4, 5];
const mappedArr2 = arr2.map((num) => num + 1);
console.log(mappedArr2); // esto saldria [ 2, 3, 4, 5, 6 ]
