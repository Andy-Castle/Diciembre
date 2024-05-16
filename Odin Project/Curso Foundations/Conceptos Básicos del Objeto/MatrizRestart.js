let numbers = [1, 2, 3, 4, 5];

function sumOfTripledEvens2(array) {
  let sum = 0;
  let evenNum = array.filter((num) => num % 2 === 0);
  console.log("Este es los que son par: " + evenNum);
  let multNum3 = evenNum.map((num) => num * 3);
  console.log("Los multiplos de los numeros par: " + multNum3);
  let sumAll = multNum3.reduce((total, currentItem) => {
    return total + currentItem;
  }); // El uno que estaba despues del },1 , era desde donde iba a sumar o algo asi
  return (sum = sumAll);
}

console.log(sumOfTripledEvens2(numbers));
//Esto de arriba es mi solución

//Esta es una forma mas sencilla de hacerla The Odin Project Foundations
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
