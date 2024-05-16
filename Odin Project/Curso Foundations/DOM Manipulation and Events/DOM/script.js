// Este selecciona el #container div
const container = document.querySelector("#container");

// Este seleciona el primer hijo de #container => .display
console.dir(container.firstElementChild);

// Este selecciona el .controls div
const controls = document.querySelector(".controls");

// Este selecciona el hermano previo osea el => .display
console.dir(controls.previousElementSibling);

// Osea este selecciona a uno
Element.querySelector(selector); // Este devuelve una referencia al primer partido de selector

// Y este selecciona al grupo de selectores
Element.querySelectorAll(selectors); //Este devuelve el "NodeList" que contiene referencias a todas las coincidencias de los selectores

/*Para crear un elemento*/
const div = document.createElement("div");

//Estos son para añadir elementos
parentNode.appendChild(childNode); //Esto anexa un childNode como el ultimo hijo de parentNode
parentNode.insertBefore(newNode, referenceNode); //inserta newNode en parentNode antes de referenceNodo

//Este es para eliminar elementos
parentNode.removeChild(child); //elimina el niño de nodo en el DOM y devuelve una referencia a niño

/*PARA AÑADIR ESTILOS EN LINEA */
//indicamos que le añadimos un estilo de rgla al elemento
div.style.color = "blue";

//añadimos varios reglas de estilo
div.style.cssText = "color: blue; background: white;";

//añadimos varias reglas de estilo
div.setAttribute("style", "color: blue; background: white;");

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background - color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

/*ATRIBUTOS DE EDICIÓN */

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

/*PARA TRABAJAR CON CLASES */

//añade una clase new al div
div.classList.add("new");

//remueve la clase new del div
div.classList.remove("new");

//si el div no tiene una clase active entonces añadela, y si tiene, entonces remuevela
div.classList.toggle("active");

/*AGREAGR CONTENIDO DE TEXTO */

//crea un texto en el node que contiene lo de abajo y añadelo
div.textContent = "Hello World!";
//ES MEJOR TEXTCONTENT PARA AÑADIR TEXTO

/*AGREGAR CONTENIDO HTML */

//renderiza este html en el div
div.innerHTML = "<span>Hello World!</span>";
