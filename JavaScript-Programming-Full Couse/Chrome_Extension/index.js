// function saveLead() {
//     console.log("Button clicked form onclick attribute");
// }
// let box = document.getElementById("box");

// box.addEventListener("click", function () {
//     console.log("I want to open the box!");
// });
// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = "5-12 days";
// shippingCost = 15;
// shippingTime = "7-14 days";
// const fullPrice = basePrice - discount + shippingCost;
// console.log("Total costs: " + fullPrice + ". It will arrive in " + shippingTime);
// const container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";
// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// }
// const recipient = "James";
// const sender = "Andy";

// const email = `
// Hey ${recipient}!

// How is it going?

// Cheers ${sender}`;
// console.log(email);

//
let myLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.youtube.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

// localStorage.setItem("myName", "Andy");
// let name = localStorage.getItem("myName");
// console.log(name);
// localStorage.clear();

//para obtener los string guardados en el local
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    renderLeads();
});

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    //para guardar los string en el local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    // console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems +=
        //     "<li><a target='_blank' href='" +
        //     myLeads[i] +
        //     "'>" +
        //     myLeads[i] +
        //     "</a></li>";
        listItems += `
            <li>
                <a targe='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`;
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}
