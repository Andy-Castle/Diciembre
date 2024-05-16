function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Paso 1: Si el elemento es un numero par
    if (array[i] % 2 === 0) {
      // Paso 2: multiplicar el numero por 3
      const tripleEvenNumber = array[i] * 3;
      // Paso 3: añadir el new numero al total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(sumOfTripledEvens(numbers));
