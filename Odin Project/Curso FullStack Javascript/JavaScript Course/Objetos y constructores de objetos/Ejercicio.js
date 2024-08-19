function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (this.read) {
      return `The ${title} by ${author}, ${pages} pages, already read it`;
    } else {
      return `The ${title} by ${author}, ${pages} pages, not read yet`;
    }
  };
}

const theHobbit = new Book("Hobbit", "J.R.R. Tolkien", 295, true);

console.log(theHobbit.info());
