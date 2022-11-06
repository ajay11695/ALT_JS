let form=document.querySelector('form')
let book_list=document.querySelector('.book_list')

class Book{
    constructor(name,author,image){
        this.name=name
        this.author=author
        this.image=image
        this.isRead=false
    }
}

class BookList{
    constructor(book=[]){
        this.books=book
    }

    addBook(name,author,image){
        let book=new Book(name,author,image)
        this.books.push(book)
        this.createUI()
    }

    createUI(){
        book_list.innerHTML=''

        this.books.forEach(book=>{
            let li=document.createElement('li')
            let img=document.createElement('img')
            img.src=book.image
            let h2=document.createElement('h2')
            h2.innerText=book.name
            let p=document.createElement('p')
            p.innerText=book.author
            let btn=document.createElement('button')
            btn.innerText=book.isRead?'complete!':'mark as read!';
             btn.addEventListener('click',()=>{
                book.isRead=!book.isRead
                this.createUI()
             })

            li.append(img,h2,p,btn)
            book_list.append(li)
        
        })
    }
}


let bookList=new BookList()


function handleSubmit(event){
    event.preventDefault()
    const name=form.elements.bookName.value
    const author=form.elements.bookAuthor.value
    const image=form.elements.bookImage.value

    bookList.addBook(name,author,image)
    console.log(name,author,image)
    form.elements.bookName.value=''
    form.elements.bookAuthor.value=''
    form.elements.bookImage.value=''
}

form.addEventListener('submit',handleSubmit)