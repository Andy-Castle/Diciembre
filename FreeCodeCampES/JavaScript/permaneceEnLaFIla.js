function proximoEnlaFila(arreglo, elemento) {
  arreglo.push(elemento); //Agregar al final del arreglo
  return arreglo.shift(); //remover el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnlaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));
