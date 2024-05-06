const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}`);
  },
};

// console.log(person.name);
// console.log(person.name[0]);
// console.log(person.age);
// person.bio();
// person.introduceSelf();

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}`);
  };
  return obj;
}

const salva = createPerson("Salva");
console.log(salva.name);
salva.introduceSelf();

const frankie = createPerson("Frankie");
console.log(frankie.name);
frankie.introduceSelf();
