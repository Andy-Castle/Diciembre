function miFuncion(...args) {
  console.log(args.length);
}

// miFuncion(1, 2, 3, 4, 5, 6);

const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sumar(1, 2, 3));
