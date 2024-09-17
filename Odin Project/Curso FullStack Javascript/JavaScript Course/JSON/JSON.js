//Como convertir un string en JSON
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);

//string to date
const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj1.birth = new Date(obj1.birth);

console.log(obj1.name + ", " + obj1.birth);

//string into a date, using the reviver function
const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(text2, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(obj2.name + ", " + obj2.birth);

//converting string into a function
const text3 =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';

const obj3 = JSON.parse(text3);

obj3.age = eval("(" + obj.age + ")");

console.log(obj3.name + ", " + obj3.age);

//Como convertir un JSON en un string
const obj4 = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj4);
console.log(myJSON);

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSONarr = JSON.stringify(arr);
console.log(myJSONarr);

// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON1 = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON1);

// Retrieving data:
let text5 = localStorage.getItem("testJSON");
let obj5 = JSON.parse(text5);
document.getElementById("demo").innerHTML = obj5.name;

// In JSON, date objects are not allowed.
//The JSON.stringify() function will convert any dates into strings.
const obj6 = { name: "John", today: new Date(), city: "New York" };
const myJSON3 = JSON.stringify(obj6);

// JSON, functions are not allowed as object values.
//The JSON.stringify() function will remove any functions from a
//JavaScript object, both the key and the value:
const obj7 = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
const myJSON4 = JSON.stringify(obj7);

// This can be omitted if you convert your functions into strings
//before running the JSON.stringify() function.
const obj8 = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj8.age = obj8.age.toString();
const myJSON5 = JSON.stringify(obj8);
