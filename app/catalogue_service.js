// eslint-disable-next-line no-unused-vars

//Exercise 003

const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

//Tryed to create the object array, maybe not the best approach but a working one

//Functions to extract the information I need from the book strings

const authorName = (book) => {

  let authorNameStartIndex = book.indexOf("by") + 3;

  let authorFirstNameEndIndex = book.indexOf(" ", authorNameStartIndex) + 1;

  let authorSecondNameEndIndex = book.indexOf(" ", authorFirstNameEndIndex);

  let author = book.substring(authorNameStartIndex,  authorSecondNameEndIndex);
 
  return author;
}

const bookTitle = (book) => {

  let bookTitleEnd = book.indexOf("by") - 1;

  let title = book.substring(0,  bookTitleEnd);
 
  return title;
}


const bookQuantity = (book) => {

  let quantityStringStart = book.indexOf("(") + 1;

  let quantityStringEnd = book.indexOf(")");

  let quantity = parseInt(book.substring(quantityStringStart,  quantityStringEnd));
 
  return quantity;
}

//Function transforming my string catalogue an object one

const objCatalogue = catalogue.map(book => {

return ({"title": bookTitle(book), "author": authorName(book), "quantity": bookQuantity(book)});

});


function countBooksByAuthor(author) {
  
  let total = 0;

  for(let books of objCatalogue){

    if(books.author === author){
      total++;
    }
  }
  return total;
}

function checkBookByTitle(title) {

  let match = false;

  for(let books of objCatalogue){

    if(books.title === title){
      match = true;
    }
  }
  return match;
}

function countBooksByFirstLetter(letter) {
  
  let total = 0;

  for(let books of objCatalogue){

    if(books.title[0].toLowerCase() === letter.toLowerCase()){
      total++;
    }
  }
  return total;
}

function getQuantity(title) {

  let total = 0;

  for(let books of objCatalogue){

    if(books.title.toLowerCase() === title.toLowerCase()){
      total += books.quantity;
    }
  }
  return total;
}

function getBooksByAuthor(author) {

  let matchedBooksByAuthor = [];

  for(let books of objCatalogue){

    if(books.author.toLowerCase() === author.toLowerCase()){
      matchedBooksByAuthor.push(books);
    }
  }
  return matchedBooksByAuthor;
}

function checkQuantity(title, quantity) {
  
  let match = false;

  for(let books of objCatalogue){

    if(books.title === title && books.quantity >= quantity){
      match = true;
    }
  }
  return match;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};


