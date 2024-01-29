var conteo = 0;

function contarCartas(carta) {
  var desicion;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      conteo--;
      break;
  }

  if (conteo > 0) {
    desicion = "Apostar";
  } else {
    desicion = "Esperar";
  }

  return conteo + " " + desicion;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
