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
    let i = 0;
    const btnRemove = document.createElement("button");
    for (let book of MY_LIBRARY){
        const item = document.createElement("li");
        const title = document.createElement("div");
        const author = document.createElement("div");
        title.classList.add("title");
        title.textContent = book.title;
        author.classList.add("author");
        author.textContent = book.author;

        const checkRead = document.createElement("div");
        const checkbox = document.createElement("input")
        const labelRead = document.createElement("label")
        checkbox.type = "checkbox";
        checkbox.name = "read";
        labelRead.for = "read";
        labelRead.textContent = "Read";
        checkRead.classList.add("checkRead")
        
        const delete_button = document.createElement("button");
        delete_button.textContent = "Remove"
        delete_button.type = "button";
        delete_button.dataset.index = `${i}`;
        delete_button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            MY_LIBRARY.splice(index,1);
            displayLib();
        });

        checkRead.append(labelRead, checkbox)
        item.append(title, author, checkRead, delete_button);
        libList.append(item);

        i++;
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

form.addEventListener("submit", buttonClick, false);
