let obj = {
  get propName() {
    // setter, the code executed on setting obj.propName = value
  },

  set propName(value) {
    // getter, the code executed on getting obj.propName
  },
};

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// console.log(user.fullName);

// user.fullName = "Alice Cooper";

// console.log(user.name);
// console.log(user.surname);

let user2 = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user2, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

// console.log(user2.fullName); // John Smith

// for (let key in user) console.log(key); // name, surname

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

// user3.name = "Pete";
// console.log(user3.name);

// user3.name = "";
// console.log(user3.name);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let jhon = new User("Jhon", 25);

// console.log(jhon.age);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let jhon = new User("Jhon", new Date(1992, 6, 1));

console.log(jhon.birthday);
console.log(jhon.age);
