function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Frances";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Ingles";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(4));
