const toppings = document.getElementsByClassName("topping");

function mostrarclic(e) {
  console.log(e.target.innerText);
}

for (const topping of toppings) {
  console.log(topping);
  topping.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}
