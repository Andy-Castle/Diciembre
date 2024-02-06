// const MI_CONSTANTE = 35;

// console.log(MI_CONSTANTE);

function calcularAreaCirculo(radio) {
  const PI = 3.14;
  if (radio < 0) {
    return undefined;
  }

  return PI * radio ** 2;
}

console.log(calcularAreaCirculo(10));
