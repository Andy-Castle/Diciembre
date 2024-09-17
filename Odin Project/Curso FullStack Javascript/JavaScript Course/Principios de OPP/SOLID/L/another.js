class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {
  fly() {
    throw new Error("Cannot fly");
  }

  swim() {
    console.log("I can swim");
  }
}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

/*Que cada clase sea capaz de llamar a la función que estoy llamando
sin restricciones */

/*Si tenemos una funciona que acepta una clase, toda subclase de la
clase tambien debe capz de trabajar con la función y funcionar */
