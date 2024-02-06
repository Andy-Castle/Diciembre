const persona = {
  nombre: "Isabel",
  presentarse() {
    return `Hola mi nombre es ${this.nombre}`;
  },
};

console.log(persona.presentarse());
