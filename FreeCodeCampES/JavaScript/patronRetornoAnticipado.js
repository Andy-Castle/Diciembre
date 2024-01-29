// function miFuncion() {
//   console.log("Hola");
//   return "Mundo";
//   console.log("Adios");
// }

// console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-1));
