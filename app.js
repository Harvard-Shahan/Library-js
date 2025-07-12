class book{
    constructor(name,author,pages){
        this._name=name;
        this._author=author;
        this._pages=pages;
        this._id=crypto.randomUUID();
    }
    get name(){
        return this._name;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
    get id(){
        return this._id;
    }
}
function createCard(book){
    //function to create a book(card) in the DOM
    let canvas=document.createElement("div");
    canvas.classList.add(book.id);
    let new_book=document.createElement("ul");
    for(i in book)
    if(Object.hasOwn(book,i))
    {
        let item=document.createElement("li");
        item.textContent=`${i.slice(1)}:${book[i]}`;
        new_book.append(item);
    }
    let btn=document.createElement("button");
    canvas.appendChild(new_book);
    canvas.appendChild(btn);
    container.appendChild(canvas);
    //this part is for deleting the entire card
    btn.textContent="Click to delete";
    btn.addEventListener('click',()=>{
        let index =books.indexOf(book);
        books.splice(index,1);
        container.removeChild(canvas);
    })
    
}
function pushDefaultvalues(){
//pushing some default values.
books.push(new book("Harry potter","JK Rowling",800));
books.push(new book("Percy Jackson","Rick Riordan",600));
books.push(new book("Goosebumps","RL Stine",500));
for (const book of books)
    createCard(book);
}
let container=document.querySelector(".container");
let body=container.parentNode;
let books=[];
let buttons=[]
pushDefaultvalues();
//create a section .Ask for input there while creating a form.
// PS: form is not implemented as it was backend(data retrieval) and I had no idea lol,found out later and didn't bother changing the structure.
let sect=document.createElement("section");
let form=document.createElement("form");
form.name="book";form.method="post";
let input_name=document.createElement("input");
input_name.name="name";
let input_author=document.createElement("input");
input_author.name="author";
let input_pages=document.createElement("input");
input_pages.name="pages";
input_pages.type="number";
form.appendChild(input_name);
form.appendChild(input_author);
form.appendChild(input_pages);
let butn=document.createElement("button");
butn.textContent="click to add a new book";
butn.type="submit";
form.append(butn);
sect.append(form)
body.append(sect);
//button to create a new book.
butn.addEventListener('click',(e)=>{
e.preventDefault();
let new_book=new book(input_name.value,input_author.value,input_pages.value)
books.push(new_book);
createCard(new_book);
input_author.value="";
input_name.value="";
input_pages.value="";
})

