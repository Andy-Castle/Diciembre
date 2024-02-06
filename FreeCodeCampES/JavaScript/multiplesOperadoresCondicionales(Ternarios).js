function compararNumeros(a, b) {
  return a == b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
  // if (a == b) {
  //   return "a y b son iguales";
  // } else if (a > b) {
  //   return "a es mayor que b";
  // } else {
  //   return "b es mayor que a";
  // }
}

console.log(compararNumeros(31, 23));
