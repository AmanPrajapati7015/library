let myLibrary = [];

function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const Book1 = new Book("good vibes good lives", "Vex King", 250, true);
myLibrary.push(Book1)




function addBookToLibrary(){
    // taking user inputs
    let title = prompt("what is the title of the book?")
    let author = prompt("who wrote this book?")
    let pages = +prompt("no. of pages?")
    let isRead =  prompt("have you read this book? {yes/no}")==="yes"? true: false;

    // creating book with user input using constructor
    let bookToAdd = new Book(title, author, pages, isRead)

    // adding our book to Library
    myLibrary.push(bookToAdd)

}

addBookToLibrary()

console.table(myLibrary)