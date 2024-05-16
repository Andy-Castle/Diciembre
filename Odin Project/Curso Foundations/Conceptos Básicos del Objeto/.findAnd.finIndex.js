const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Iriv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen in my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

//Array.prototype.find()
//Find is like filter, but instead returns just one you are
//looking for
//find the comment with the ID of 823423

const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment); //{ text: 'Super good', id: 823423 }

const comment2 = comments.find((comment) => comment.id === 823423);
console.log(comment2); //{ text: 'Super good', id: 823423 }

//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
console.log(index); //1

// comments.splice(index, 1);

console.log(comments); //Ya no aparece el super good en comments del splice

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.log(newComments);
