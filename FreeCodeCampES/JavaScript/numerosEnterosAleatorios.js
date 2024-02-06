// var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

// console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior) {
  //generar un entero aleatorio entre 0 y el limite superior(sin inlcuirlo)
  return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}
