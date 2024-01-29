var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cuchara",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};

// console.log(miReceta.descripcion);
// console.log(miReceta.costo);
// console.log(miReceta.ingredientes.masa["harina"]);
// console.log(miReceta.ingredientes.masa.sal);
// console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes["cobertura"].azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
