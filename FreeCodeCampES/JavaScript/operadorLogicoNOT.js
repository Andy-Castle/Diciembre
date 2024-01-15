/*
Tabla de verdad del operador NOT
Para: X && Y
| x | !x |
------------------
| t | f  |
| f | t  |
*/

// console.log(!true); //false
// console.log(!false); //true

var a = 8;

// !(a>5) --> !true ---> false
console.log(!(a > 5));

// !(a<5) --> !false ---> true
console.log(!(a < 5));
