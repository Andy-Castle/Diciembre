class Libro {
  constructor(autor) {
    this._autor = autor; //esto es inmodificable, no es privada
  }
  get autor() {
    // console.log("Getter");
    return this._autor;
    //esto esta protegido
  }

  set autor(nuevoAutor) {
    // console.log("Setter");
    this._autor = nuevoAutor;
    //actualiza el valor
  }
}

const libro = new Libro("anonimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
