// METODO 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// METODO 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

// METODO 1 CON FUNCIONES
//Y TAMBIEN VEMOS EL METODO 2 Y 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

//METODO 2 Y 3 DE FUNCIONES

const btn3 = document.querySelector("#btn3");

//METODO 2
btn3.onclick = alertFunction;

//METODO 3
btn3.addEventListener("click", alertFunction);

//Acceder a la información del evento
btn.addEventListener("click", function (e) {
  console.log(e); // en este me aparecen las propiedades del callback
});

btn.addEventListener("click", function (e) {
  console.log(e.target); //en este me aparece a que se le esta haciendo targe osea esto " <button id="btn">Click Me</button>"
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue"; // al momento de darle click el boton cambia a fondo azul
});
