var contactos = [
  {
    nombre: "Nora",
    apellido: "Nav",
    numero: "09967038634534",
    gustos: ["Pizza", "Programación"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "778989904837",
    gustos: ["Howgwarts", "Magia"],
  },
  {
    nombre: "Sherlock",
    apellido: "Holmes",
    numero: "8769504303434",
    gustos: ["Casos interesantes", "Violín"],
  },
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre == nombre) {
      return contactos[i][propiedad] || "La propiedad no existe.";
    }
  }
  return "El contacto no esta en la lista";
}

console.log(buscarPerfil("Harry", "gustos"));
// for (var i = 0; i < contactos.length; i++) {
//   console.log(contactos[i]);
// }
