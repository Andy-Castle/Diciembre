class ChildClass extends ParentClass {}

//Ejemplos

class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  sayName() {
    ChromeSamples.log("Hi, I am a ", this.name + ".");
  }

  sayHistory() {
    ChromeSamples.log(
      '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
    );
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);

    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}

class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); //Function.prototype

Object.getPrototypeOf(nullExtends.prototype); //null
