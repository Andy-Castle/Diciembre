var miCuaderno = {
  color: verde,
  categoria: 3,
  precio: 4.56,
};

console.log(miCuaderno.hasOwnProperty("color"));

function verificarPropiedades(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad.";
  }
}
