const MY_LIBRARY = [];
const libList = document.querySelector("#libList");
const addButton = document.querySelector("button");
const form = document.querySelector("form")


function Book(title, author) {
    this.title = title;
    this.author = author;
}
function displayLib(){
    libList.innerHTML = "";
    for (let book of MY_LIBRARY){
        const item = document.createElement("li");
        const title = document.createElement("div");
        const author = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;
        author.classList.add("author");
        author.textContent = book.author;

        item.append(title, author);
        libList.append(item);
    }
}
let current_title = "foo"
let current_author = "foo-two"
function addBook(){
    let newBook = new Book(current_title, current_author);
    MY_LIBRARY.push(newBook);
    displayLib();
}
function buttonClick(event){
    event.preventDefault();
    current_title = document.getElementById("title").value;
    current_author = document.getElementById("author").value;
    addBook();
}

addBook();
current_title = "FiFi";
current_author = "your Mom";
addBook();

form.addEventListener("submit", buttonClick, false);
