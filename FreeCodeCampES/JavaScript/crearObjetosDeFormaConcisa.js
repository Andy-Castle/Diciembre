// const crearPersona = (nombre, edad, idioma) => {
//   return {
//     nombre: nombre,
//     edad: edad,
//     idioma: idioma,
//   };
// };

const crearPersona = (nombre, edad, idioma) => ({ nombre, edad, idioma });

console.log(crearPersona("Andy", 24, "Español"));
