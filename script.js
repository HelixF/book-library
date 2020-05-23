// Array that holds the entire library
let myLibrary = [];

// Constructor for the book object
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Prototype for adding a book to the library array
book.prototype.addBook =  function() {
    myLibrary.push({
        title: this.title, 
        author: this.author, 
        pages: this.pages, 
        read: this.read
    });
}

// let book1 = new book('AwesomeTitle', 'MagicAuthor', 534, false);

// book1.addBook();
// console.log(book1)
// console.table(myLibrary);
