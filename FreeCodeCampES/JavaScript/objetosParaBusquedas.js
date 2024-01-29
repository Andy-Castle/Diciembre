function buscarElementoQuimico(simbolo) {
  var simboloQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio",
  };
  return simboloQuimicos[simbolo];
}

console.log(buscarElementoQuimico("S"));
