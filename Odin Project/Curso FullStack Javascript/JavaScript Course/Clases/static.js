// static methodName(){}
// Los métodos estáticos son llamados sin instanciar su clase.
// Son habitualmente utilizados para crear funciones para una aplicación.

//EJEMPLOS

class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));
console.log(BiggerTripple.tripple(3)); //primero es 3 *3 = 9, y luego 9 * 9 = 81
var tp = new Tripple();
console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
