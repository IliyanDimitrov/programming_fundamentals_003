// eslint-disable-next-line no-unused-vars


/* Exercise 002 code


Want to reuse and refactor some of the code from yesterday so that the catalogue of
strings become catalogue of object

 */

//Exercise 003

/* const catalogue = [
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
]; */


const catalogue = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    quantity: 10 
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    quantity: 0 
  },
  {
    title: "Between the Assassinations",
    author: "Aravind Adiga",
    quantity: 9
  },
  {
    title: "Wolf Hall",
    author: " Hilary Mantel",
    quantity: 33 
  },
  {
    title: "Bring Up The Bodies",
    author: " Hilary Mantel",
    quantity: 31 
  },
  {
    title: "A Place of Greater Safety",
    author: " Hilary Mantel",
    quantity: 11 
  },
  {
    title: "Giving Up the Ghost",
    author: " Hilary Mantel",
    quantity: 8 
  },
  {
    title: "The Assassination of Margaret Thatcher",
    author: " Hilary Mantel",
    quantity: 43 
  },
  {
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    quantity: 12 
  },
  {
    title: "Conversations With Friends",
    author: "Sally Rooney",
    quantity: 1 
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    quantity: 2
  },
  {
    title: "Everything I Never Told You",
    author: "Celeste Ng",
    quantity: 6 
  },
  {
    title: "2666",
    author: "Robert Bolaño",
    quantity: 17
  },
  {
    title: "By Night In Chile",
    author: "Robert Bolaño",
    quantity: 8
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    quantity: 3
  },
  {
    title: "Oliver Twist",
    author: "Charles Dickens",
    quantity: 7
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    quantity: 1
  },
  {
    title: "The Blind Assassin",
    author: "Margaret Atwood",
    quantity: 8
  },
  {
    title: "Why Be Happy When You Could Be Normal?",
    author: "Jeanette Winterson",
    quantity: 19
  },
  {
    title: "The Origin of Species",
    author: "Charles Darwin",
    quantity: 50
  }
];

/* const catalogueOfObj = catalogue.reduce((acc, bookString) => {

Will use this to make my catalogue an object one

}); */



function countBooksByAuthor(author) {
  // Your code here
}

function checkBookByTitle(title) {
  // Your code here
}

function countBooksByFirstLetter(letter) {
  // Your code here
}

function getQuantity(title) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

function checkQuantity(title, quantity) {
  // Your code here
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};


