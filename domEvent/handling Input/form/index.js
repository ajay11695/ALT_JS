let form=document.querySelector('.form1')
let form2=document.querySelector('.v-form')

let over=document.querySelector('.over')

let user={}

function handle(event){
    event.preventDefault()
    console.log(form.elements.email.value)

    user.name=form.elements.name.value
    user.email=form.elements.email.value
    user.movie=form.elements.movie.value
    user.color=form.elements.color.value
    user.genre=form.elements.genre.value
    user.term=form.elements.term.checked
    user.range=form.elements.range.value
 
    over.classList.add('open')

display(user)
console.log(user)
}


form.addEventListener('submit',handle)
 
function display(data){
    let h1=document.createElement('h1')
    h1.innerText=`HELLO ${data.name}`
    let email=document.createElement('h1')
    email.innerText=`Email: ${data.email}`
    let book=document.createElement('h1')
    book.innerText=`Books: ${data.movie}`
    let color=document.createElement('h1')
    color.innerText=`Color: ${data.color}`
    let rate=document.createElement('h1')
    rate.innerText=`Rating: ${data.range}`
    let genre=document.createElement('h1')
    genre.innerText=`Genre: ${data.genre}`
    let term=document.createElement('h1')
    term.innerText=` 👉I Agree to Terms`

    form2.append(h1,email,book,color,rate,genre,term)
}