let myLibrary = [];

function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead
}

function toggleRead4All(e){
    let i = +(e.target.parentElement.getAttribute("data-index"))
    myLibrary[i].toggleRead()

    e.target.textContent = myLibrary[i].isRead ? "Read" : "Not Read";
    e.target.classList.remove("read")
    e.target.classList.remove("not-read")
    e.target.classList.add(myLibrary[i].isRead ? "read" : "not-read")
}





const Book1 = new Book("good vibes good lives", "Vex King", 250, true);
const Book2 = new Book("power of subconsious mind", "josph morphy", 342, false);

myLibrary.push(Book1)
myLibrary.push(Book2)





// these functions will be called by html elements check html file for their call.
function showForm(){
    let form = document.querySelector(".new-book-form")
    let formBackground = document.querySelector(".form-background")
    formBackground.classList.add("active")
    form.classList.add("active")
}
function removeForm(){
    let form = document.querySelector(".new-book-form")
    let formBackground = document.querySelector(".form-background")
    formBackground.classList.remove("active")
    form.classList.remove("active")
}





function addBookToLibrary(){
    // extracting form inputs
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = +document.querySelector("#pages").value
    let isRead =  document.querySelector("#is-read").checked

    // creating book with user input using constructor
    let bookToAdd = new Book(title, author, pages, isRead)

    // adding our book to Library
    myLibrary.push(bookToAdd)

    // clearing input fields
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    document.querySelector("#is-read").checked = false

    // hide form from viewport
    removeForm()

    // refresh books in display
    displayBooks()

}
















const booksContainer = document.querySelector(".books-container");
function displayBooks(){
    // for a fresh start!!
    booksContainer.innerHTML = "" 

    let i = 0;
    let book;
    while (i < myLibrary.length){
        book = myLibrary[i]

        let bookCard = document.createElement("div");
        bookCard.classList.add("book");

        let titlePara = document.createElement("p");
        titlePara.textContent = book.title;
        bookCard.appendChild(titlePara)

        let authorPara = document.createElement("p");
        authorPara.textContent= "By "+book.author;
        bookCard.appendChild(authorPara);

        let pagesPara = document.createElement("p");
        pagesPara.textContent= `${book.pages} pages`;
        bookCard.appendChild(pagesPara);

        let readStatus = document.createElement("button");
        readStatus.classList.add("read-status") 
        readStatus.textContent = book.isRead ? "Read" : "Not Read";
        readStatus.classList.add(book.isRead ? "read" : "not-read")
        readStatus.addEventListener("click", toggleRead4All)    //important!!
        bookCard.appendChild(readStatus);

        let remove = document.createElement("button");
        remove.textContent = "Remove";
        bookCard.appendChild(remove);

        bookCard.setAttribute("data-index", i)

        booksContainer.appendChild(bookCard)


        i++
    }


}



console.table(myLibrary)
displayBooks()