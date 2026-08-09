
const myLibrary = []



function getBookDetails(){
document.getElementById("add").addEventListener("click", (event) =>{
   

    const authorName = document.getElementById("name").value
    
    const title = document.getElementById("title").value;

    const pages = document.getElementById("pages").value
    let status = ""
   if(document.querySelector('input[type = "checkbox"]').checked){
    status = "Read"
   }else{
    status = "Inprogress"
   };

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
   };





   

 
   
 
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
    if(myLibrary.length === 0){
        document.getElementById("notice").innerHTML = "<h2 class='zero'>Add  books to your <i>Library</i></h2>."
    }else{
        document.getElementById("notice").innerHTML = ""
    }

   

   
    myLibrary.map((element) =>{
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h2>Title: ${element.title}</h2>
        <p>Author: ${element.author}</p> <p>Pages: ${element.pages}</p>
        <p>Status: ${element.status}</p>
        <button btn-id=${element.id} class= "delete-btn">DELETE</button>`
        
        cardElement.appendChild(newDiv)

    
      const del = newDiv.querySelector(".delete-btn")
      del.addEventListener("click", () => {
        const cardId = del.getAttribute("btn-id")

       const bookId = myLibrary.findIndex(book => {
        return book.id === cardId
      })

      if(bookId !== -1){
        myLibrary.splice(bookId,1)
        createCard()

      }
      else{
        alert("Book was not found!")
      }
          console.log(bookId);
            createCard()          
      }
      )
    })
}

 if(myLibrary.length === 0){
        document.getElementById("notice").innerHTML = "<h2 class='zero'>Add  books to your <i>Library</i></h2>."
    }else{
        document.getElementById("notice").innerHTML = ""
    }

