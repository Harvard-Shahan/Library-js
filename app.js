let container=document.querySelector(".container");
let books=[];
function book(name,author,pages){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.id=crypto.randomUUID();
}
books.push(new book("Harry potter","JK Rowling",800));
books.push(new book("Percy Jackson","Rick Riordan",600));
books.push(new book("Goosebumps","RL Stine",500));

for (const book of books) {
    let canvas=document.createElement("div");
    canvas.classList.add(book.id);
    let new_book=document.createElement("ul");
    for(i in book)
    if(Object.hasOwn(book,i))
    {
        let item=document.createElement("li");
        item.textContent=`${i}:${book[i]}`;
        new_book.append(item);
    }
    let btn=document.createElement("button");
    btn.id=book.id;
    btn.textContent="Click to delete";
    canvas.appendChild(new_book);
    canvas.appendChild(btn);
    container.appendChild(canvas);
}
let buttons=document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let _=document.getElementsByClassName(btn.id);
        container.removeChild(_[0]);
        // console.log(_);
    })
})
