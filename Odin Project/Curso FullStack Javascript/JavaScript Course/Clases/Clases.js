// class Rectangulo {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// }

//Anonima
// let Rectangulo = class {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// };

// console.log(Rectangulo.name); //"Rectangulo"

//Nombrada
// let Rectangulo = class Rectangulo2 {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
// };
// console.log(Rectangulo.name); //"Rectangulo2"

//Métodos prototipo
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100

//Metodos estaticos
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2));

//Boxing con prototipos y metodos estaticos
// class Animal {
//   hablar() {
//     return this;
//   }

//   static comer() {
//     return this;
//   }
// }

// let obj = new Animal();
// obj.hablar(); //Animal {}
// let hablar = obj.hablar;
// hablar(); //undefined

// Animal.comer(); //class Animal
// let comer = Animal.comer;
// comer();

// function Animal() {}
// Animal.prototype.hablar = function () {
//   return this;
// };

// Animal.comer = function () {
//   return this;
// };

// let obj = new Animal();
// let hablar = obj.hablar;
// hablar(); // global object

// let hablar = Animal.hablar;
// hablar(); // global object

//SUBCLASES CON EXTENDS
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " ladra.");
  }
}

const pet = new Animal("pet");
pet.hablar();
const capuchina = new Perro("capuchina");
capuchina.hablar();

// function Animal(nombre) {
//   this.nombre = nombre;
// }
// Animal.prototype.hablar = function () {
//   console.log(this.nombre + "hace un ruido.");
// };

// class Perro extends Animal {
//   hablar() {
//     super.hablar();
//     console.log(this.nombre + " ladra.");
//   }
// }

// var p = new Perro("Mitzie");
// p.hablar();

// var Animal = {
//   hablar() {
//     console.log(this.nombre + " hace ruido.");
//   },
//   comer() {
//     console.log(this.nombre + " se alimenta.");
//   },
// };

// class Perro {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
//   hablar() {
//     console.log(this.nombre + " ladra.");
//   }
// }

// // Solo adjunta los métodos aún no definidos
// Object.setPrototypeOf(Perro.prototype, Animal);

// var d = new Perro("Mitzie");
// d.hablar(); // Mitzie ladra.
// d.comer(); // Mitzie se alimenta.

//ESPECIES
class MyArray extends Array {
  // Sobreescribe species sobre el constructor padre Array
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

//Llamadas a super clases con super
class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace ruido");
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + " maulla");
  }
}

const tigre = new Leon("Leoncin");
tigre.hablar();
// Leoncin hace ruido
// Leoncin maulla

//Mix-ins
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
