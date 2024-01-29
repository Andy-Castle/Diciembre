var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};

console.log(mochila.color); //azul
mochila.color = "rojo";
console.log(mochila.color);

console.log(mochila.contenido);
mochila.contenido.push("lápiz");
console.log(mochila.contenido);

mochila.contenido = [];
console.log(mochila.contenido);
