class MyClass {
  constructor() {}
  method1() {}
  method2() {}
  method3() {}
  method4() {}
}

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi " + this.name);
  }
}

let user = new User("Jhon");
user.sayHi();

console.log(typeof User);

console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);

console.log(Object.getOwnPropertyNames(User.prototype));

function User2(name) {
  this.name = name;
}

User2.prototype.sayHi = function () {
  console.log("Hola " + this.name);
};

let user2 = new User2("Jhon");
user2.sayHi();

// console.log(User);

let User3 = class {
  sayHi() {
    console.log("Ohayo");
  }
};

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User4 = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

// new User4().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

let User5 = makeClass("Buenas");
new User5().sayHi();

//GETTERS / SETTERS

class User6 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let usuario = new User6("Jaime");
console.log(usuario.name);
usuario = new User6("");

class User7 {
  ["say" + "Hi"]() {
    console.log("Hello");
  }
}

new User7().sayHi();

class User8 {
  name = "John";

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
}

new User8().sayHi();

class User9 {
  name = "Jhon";
}

let userio = new User9();
console.log(userio.name); // John
console.log(User9.prototype.name); // undefined

// class User10 {
//   name = prompt("Name, please?", "John");
// }

// let userios = new User10();
// alert(userios.name); // John

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  };
}

let button = new Button("Hello");

setTimeout(button.click, 1000);

class MyClass {
  prop = value; // property

  constructor() {
    // constructor
    // ...
  }

  method() {} // method

  get something() {} // getter method
  set something(value) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
