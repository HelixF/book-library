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

//Dummy books
let book1 = new book('AwesomeTitle', 'MagicAuthor', 534, 'Yes').addBook();
let book2 = new book('MegaTitle', 'MegaAuthor', 123, 'No').addBook();


// Append Library to table

function render() {
const libraryTable = document.getElementById('libraryTable');


    //New Row for each book object in the library array
    for (let i = 0 ; i < myLibrary.length ; i++) {
        let newRow = libraryTable.insertRow(i+1);

        //Create number of cells equivalent to book properties for each row
        for (c = 0; c < book.length; c++) {
        let newCell = newRow.insertCell(newRow);
        }

        //Assigns each book property value to it's corresponding cell
        newRow.children[0].innerHTML = myLibrary[i].title;
        newRow.children[1].innerHTML = myLibrary[i].author;
        newRow.children[2].innerHTML = myLibrary[i].pages;
        newRow.children[3].innerHTML = myLibrary[i].read;

    }
}

render();
