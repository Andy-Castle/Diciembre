const title = document.getElementById("titulo");
console.log(title);

const toppings = document.getElementsByClassName("topping");
console.log(toppings[3]);

const misToppings = document.getElementsByTagName("li");
console.log(misToppings[0]);

const toppingsFondoMarron = document.getElementsByClassName("fondo-marron");
console.log(toppingsFondoMarron[0]);

const aceituna = document.querySelector("#aceitunas");
console.log(aceituna);

const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja);

const primerNaranja = document.querySelector("ul li.fondo-naranja");
console.log(primerNaranja);

const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");
console.log(primerToppingNoMarron);

const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]);
console.log(toppingsNaranja.length);
console.log(typeof toppingsNaranja);

/////////////////////////////

const primerTopping = document.querySelector(".topping");

primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform = "uppercase";

console.log(primerTopping.style);

///////

const listDeToppings = document.getElementById("lista-toppings");
console.log("innerText");
console.log(listDeToppings.innerText);
console.log("textContent");
console.log(listDeToppings.textContent);
console.log("innerHTML");
console.log(listDeToppings.innerHTML);

const titulo = document.getElementById("titulo");
titulo.innerText = "Mis Toppings Favoritos";
titulo.textContent = "Mis Toppings Favoritos";

///////

const enlace = document.getElementsByTagName("a");
console.log(enlace[0].removeAttribute("href"));
console.log(enlace[0].getAttribute("href"));
console.log(enlace[0].setAttribute("href", "https://www.freecodecamp.org"));

//////

const primerTopping = document.querySelector(".topping");
console.log(primerTopping.classList);

///////

const primerTopping = document.querySelector(".topping");
primerTopping.classList.add("texto-verde");
console.log(primerTopping.classList.contains("fondo-azul"));
primerTopping.classList.remove("topping");
console.log(primerTopping.classList);

/////////
const listaDeToppings = document.getElementById("lista-toppings");

const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Queso Extra";

// listaDeToppings.append(toppingNuevo);
listaDeToppings.appendChild(toppingNuevo);

// toppingNuevo.remove();
// listaDeToppings.remove();

////////////

const listasDeToppings = document.getElementById("lista-toppings");

console.log(listasDeToppings.parentElement);
console.log(listasDeToppings.children);
// console.log(listasDeToppings.firstChild);
// console.log(listasDeToppings.children[0]);
// console.log(listasDeToppings.lastChild);
console.log(listasDeToppings.firstElementChild);
console.log(listasDeToppings.lastElementChild);
console.log(listasDeToppings.previousElementSibling);
console.log(listasDeToppings.nextElementSibling);
// console.log(listasDeToppings.nextSibling);
// console.log(listasDeToppings.previousSibling);
