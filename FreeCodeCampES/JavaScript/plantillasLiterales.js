/*Plantillas Literales o Plantillas de cadenas
Caracteristicas:
-Se usa el acento invertido(backtick) ` en lugar de comillas.
-Puede contener comillas simples y dobles
-Las lineas se preservan como se escriben en el codigo
-Para reemplazar una variable es escribe ${variable}
-Dentro de ${} tambien puedes escribir expresiones */

// var a = 6;
// console.log(`El valor de a es ${a}`);

// var nombre = "Nora";
// var edad = 6;

// console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

// var miArreglo = [1, 2, 3, 4];

// console.log(`El arreglo es ${miArreglo}`);
// console.log(`El arreglo es ${JSON.stringify(miArreglo)}`);

// var persona = {
//   nombre: "Gino Cass",
//   edad: 10,
// };

// const SALUDO = `Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;

// console.log(SALUDO);

var persona = {
  nombre: "Gino Cass",
  edad: 10,
};

const { nombre, edad } = persona;

const SALUDO = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

console.log(SALUDO);
