const fibonacci = function (countArg) {
  let count;
  if (typeof countArg !== "number") {
    count = parseInt(countArg);
  } else {
    count = countArg;
  }
  if (count < 0) return "Sorry";
  if (count == 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

console.log(fibonacci(4));

const fib = [0, 1];
for (let i = 2; i <= count; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
return fib[count];
