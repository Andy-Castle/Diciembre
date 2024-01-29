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

  /*
  if(valor == 1){
    idioma = "Español"
  } else if(valor == 2){
    idioma = "Frances"
  } else if(valor == 3){
    idioma = "Italiano"
  } else {
    idioma = "Ingles"
  }*/
}
