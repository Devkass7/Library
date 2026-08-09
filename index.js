
const myLibrary = []

function getBookDetails(){
document.getElementById("add").addEventListener("click", (event) =>{
   

    const authorName = document.getElementById("name").value
    
    const title = document.getElementById("title").value;

    const pages = document.getElementById("pages").value
   let status = ""
   try {
    if(authorName && title && pages){
        addToLibrary(authorName,title,pages,status)
        createCard() 
    }else{
        alert("Fill all fields")
    }
   } catch (error) {
    alert("fill all Fields!")
    console.error("Error")
   }

    if(document.getElementById("status").value == "on"){
     status = 'Read'   
    }



   

 
   
 
 document.getElementById("form").reset();
 event.preventDefault();   
})

 document.getElementsByTagName("input").value = "" 
 
}






const Book = function(author,tittle,pages,status){
    this.author = author,
    this.title = tittle,
    this.pages = pages,
    this.status= status,
    this.id = crypto.randomUUID()
}




function addToLibrary(authorName,title,pages,status){
   
    
    let currentBook = new Book(authorName,title,pages,status)

    myLibrary.push(currentBook)
    // console.log(myLibrary);
  console.log(myLibrary);
    
     
}

getBookDetails()

function createCard(){ 
    const cardElement = document.getElementById("container")
    cardElement.innerHTML = ""


    myLibrary.map((element) =>{
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h2>Title: ${element.title}</h2>
        <p>Author: ${element.author}</p> <p>Pages: ${element.pages}</p>
        <p>Status: ${element.status}</p>
        <button id=${element.id} class= "delete-btn">DELETE</button>`
        
        cardElement.appendChild(newDiv)

    
       const del = document.querySelector(".delete-btn")
        del.addEventListener("click",() =>{
            const index = myLibrary.findIndex(book => book.id == del.dataset.id)
           myLibrary.splice(index, 1)

           console.log(myLibrary)
           createCard()
})

    })

  
}


