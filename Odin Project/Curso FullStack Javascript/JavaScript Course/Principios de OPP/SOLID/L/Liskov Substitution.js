class Shape {
  area() {
    //
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

function increaseShapeWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(square);

console.log(rectangle1.area());
console.log(square.area());
