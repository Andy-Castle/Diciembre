var contacst = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0987654376",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "1234567896",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "987659484",
        likes: ["Intriguing Case", "Violin"],
    },
    {
        firstName: "Andy",
        lastName: "Castle",
        number: "0987654384",
        likes: ["Javascript, Gaming, Cats"],
    },
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacst.length; i++) {
        if (contacst[i].firstName == name) {
            return contacst[i][prop] || "No pr0piedad";
        }
    }
    return "No contacto";
}

var data = lookUpProfile("Akira", "number");

console.log(data);
