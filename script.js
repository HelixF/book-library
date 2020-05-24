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

function render(i) {
const libraryTable = document.getElementById('libraryTable');


    //New Row for each book object in the library array
    for (i ; i < myLibrary.length ; i++) {
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

//Functionality for button "New Book"
const newBookButton = document.getElementById('addButton');
const formContainer = document.getElementById('newBookForm');

    //Opens up the new book form
    newBookButton.addEventListener('click', (e) => {
            formContainer.style.visibility = 'visible';
        }
    )

//Functionality for new book form buttons
const addBookButton= document.getElementById('addBook');
    
    //Get values from input fields and create new book object
    addBookButton.addEventListener('click', (e) => {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const pageNumber = document.getElementById('pageNumber').value;
    const isRead = document.getElementById('isRead').value;

    new book(bookName, authorName, pageNumber, isRead).addBook();    

    //Adds only the last added book to the table
    render(myLibrary.length-1);
})

const cancelButton= document.getElementById('cancel');
cancelButton.addEventListener('click', (e) => {
    formContainer.style.visibility = 'hidden';
})

// Render all items from library array
render(0);
