const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

///

const redText = document.createElement("p");
redText.textContent = "Hey limm red!";
redText.style.color = "red";

container.appendChild(redText);

///

const blueTitle3 = document.createElement("h3");
blueTitle3.textContent = "liam a blue h3!";
blueTitle3.setAttribute("style", "color: blue;");

container.appendChild(blueTitle3);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "boder: 4px solid black; background: pink;");

container.appendChild(newDiv);

/* */
const titleH1 = document.createElement("H1");
titleH1.textContent = "lianm en un div";
newDiv.appendChild(titleH1);

/* */
const newText = document.createElement("p");
newText.textContent = "ME TOO!";
newDiv.appendChild(newText);
