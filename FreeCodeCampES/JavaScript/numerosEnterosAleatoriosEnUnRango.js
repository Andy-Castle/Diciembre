function rangoAleatorio(limiteInferior, limiteSuperior) {
  return (
    Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) +
    limiteInferior
  );
}

for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3, 8));
}
