function mostrarclic(topping) {
  console.log(topping);
}

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="styles.css" />
//     <link rel="icon" href="images/pizzaIcon.png" type="images/pizzaIcon.png" />
//     <title>Mis toppings</title>
//   </head>
//   <body>
//     <div id="contenedor">
//       <h1 id="titulo">🍕<br />Topping de Pizza</h1>
//       <ul id="lista-toppings">
//         <li
//           onclick="mostrarclic('aceitunas')"
//           class="topping fondo-marron"
//           id="aceitunas">
//           Aceitunas
//         </li>
//         <li
//           onclick="mostrarclic('Cebolla')"
//           class="topping fondo-naranja"
//           id="cebolla">
//           Cebolla
//         </li>
//         <li
//           onclick="mostrarclic('albahaca')"
//           class="topping fondo-marron"
//           id="albahaca">
//           Albahaca
//         </li>
//         <li
//           onclick="mostrarclic('Champiñones')"
//           class="topping fondo-naranja"
//           id="champiñones">
//           Champiñones
//         </li>
//       </ul>
//       <a
//         href="https://www.youtube.com/watch?v=koiPxFFiqJ4&list=PLwK5HWB90z39v5NDN25JFzQ6XHZUUG1Ia&index=13"
//         >FreeCodeCampES</a
//       >
//     </div>
//     <script src="app.js"></script>
//   </body>
// </html>

albahaca.addEventListener("click", mostrarclic);
