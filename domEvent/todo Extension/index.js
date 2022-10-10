//Create a watch list app that will have an input box
//When you type something and press enter it should be added as a list below input
//Each movie name will have a cross button (to delete the movie)
//When you click on the cross the movie name should be deleted

let input=document.querySelector("input[type='text']")
let ul=document.querySelector("ul")
let footer=document.querySelector("footer")


allmovie=[
    {
        name:'love',
        watched:true
    },
    {
        name:'titanic',
        watched:false
    }
]


input.addEventListener('keyup',(event)=>{
    // console.log(event.keyCode)
    if(event.keyCode===13){
        console.log(event.target.value)
        allmovie.push({
            name:event.target.value,
            watched:false
        }) 

        event.target.value=''
         display()
    }
  
})


function deletemovie(event){
    // event.target.parentElement.remove()
    let id=event.target.dataset.id
    allmovie.splice(id,1)
    display()
}
function handlechange(event){
    // console.log(event.target)
    let id=event.target.id
    // console.log(id)
    allmovie[id].watched=!allmovie[id].watched
}

function display(data=allmovie){
    ul.innerHTML=''
data.forEach((movie,i) => {

    let li=document.createElement('li')
    let hr=document.createElement('hr')
    let input=document.createElement('input')
    input.type='checkbox'
    input.checked=movie.watched
    input.id=i
    input.addEventListener('change',handlechange)

    let label=document.createElement('label')
    label.innerText=movie.name
    let span=document.createElement('span')
    span.innerText='❌'
    span.setAttribute('data-id',i)

    span.addEventListener('click',deletemovie)

    li.append(input,label,span,hr)
    ul.append(li)

    
});
}

display()

let activebutton='All'

function CreateFooter(){
    let all=document.createElement('a')
    all.innerText='All'
    let active=document.createElement('a')
    active.innerText='Active'

    active.addEventListener('click',()=>{
        let activemovie=allmovie.filter(movie=>!movie.watched)
    console.log(activemovie)
        display(activemovie)
        activebutton='Active'
        updateactivebutton()
    })

    let complete=document.createElement('a')
    complete.innerText='Completed'

    complete.addEventListener('click',()=>{
        let completemovie=allmovie.filter(movie=>movie.watched)
        console.log(completemovie)
        display(completemovie)
        activebutton='Complete'
updateactivebutton()

    })

    let clearComplete=document.createElement('a')
    clearComplete.innerText='Clear Completed'

    clearComplete.addEventListener('click',()=>{
        allmovie=allmovie.filter(movie=>!movie.watched)
        console.log(allmovie)
        display()

    })

    all.classList.add('selected')
    all.addEventListener('click',()=>{
        display()
        activebutton='All'
updateactivebutton()

    })

    function updateactivebutton(){
        all.classList.remove('selected')
        active.classList.remove('selected')
        complete.classList.remove('selected')
    
        if(activebutton=="All"){
            all.classList.add('selected')
        }
        if(activebutton=="Active"){
            active.classList.add('selected')
        }
        if(activebutton=="Complete"){
            complete.classList.add('selected')
        }
    }


    footer.append(all,active,complete,clearComplete)
}

CreateFooter()


