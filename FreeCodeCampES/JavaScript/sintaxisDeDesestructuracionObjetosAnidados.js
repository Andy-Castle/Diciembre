// const usuario = {
//   johnDoe: {
//     edad: 27,
//     correo: "johnDoe@gmail.com",
//   },
// };

// const {
//   johnDoe: { edad: edadDelUsuario, correo: correoDelUSuario },
// } = usuario;

// console.log(edadDelUsuario);
// console.log(correoDelUSuario);

const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 61,
    maxima: 75,
  },
  hoy: {
    minima: 64,
    maxima: 77,
  },
  mañana: {
    minima: 68,
    maxima: 80,
  },
};

// const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
// const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// console.log(minimoHoy, maximaHoy);

const {
  hoy: { minima: minimoHoy, maxima: maximaHoy },
} = PRONOSTICO_LOCAL;

console.log(minimoHoy, maximaHoy);
