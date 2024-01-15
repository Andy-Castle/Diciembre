/*
Tabla de verdad del operador OR
Para: X && Y
| x | y | x || y |
------------------
| t | t |    t   |
| t | f |    t   |
| f | t |    t   |
| f | f |    f   |
*/

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

var a = 5;
console.log(a < 5 || a > 15);
