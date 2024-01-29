var ordenersDePizza = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    paraLlevar: true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimenton"],
    paraLlevar: false,
  },
  {
    tipo: "napolitana",
    tamaño: "individual",
    precio: 6.78,
    toppings: [],
    paraLlevar: true,
  },
];

// console.log(ordenersDePizza[0]);
// console.log(ordenersDePizza[1]);

console.log(ordenersDePizza[0]["tipo"]);
console.log(ordenersDePizza[0].tipo);
