import "./styles.css";
import { greeting } from "./greeting.js";
import odingImage from "./odin.png";

console.log(greeting);

const image = document.createElement("img");
image.src = odingImage;

document.body.appendChild(image);
