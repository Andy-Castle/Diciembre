//Esta es una manera de definir objetos, objeto literal
const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  },
};

//Como obtener información de un objetos

//notación de puntos / dot notation
console.log(myObject.property);

//notación de soporte / bracket notation
myObject["obnoxious property"]; // [Function]

const variable = "property";

console.log(myObject.variable); // esto nos da "undefined" porque esta buscando la propiedad nombrada "variable" en nuestro objeto

console.log(myObject[variable]); // esto es equivalete a myObject["property"] y regresa "Value!"
