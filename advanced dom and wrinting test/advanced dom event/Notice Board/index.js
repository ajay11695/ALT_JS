/*Notice Board

Create a notice board
Using input box and title you can add a new notice
While adding a notice you will also choose a category
Once the notice is added it will be visible on the top
Using double click on the title or the category will allow the user to edit the text.
When you click outside (blur) of the respective element or press enter the title or category will get updated to the new value.
Add local storage support*/


let form=document.querySelector('form')
let ul=document.querySelector('ul')

let cardsData=JSON.parse(localStorage.getItem('cards')) ||[]


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let title=event.target.elements.title.value
    let category=event.target.elements.category.value

    cardsData.push({title,category})

    localStorage.setItem('cards',JSON.stringify(cardsData))
    console.log(title,category)
    createUI(cardsData,ul)
})

function handleEdit(event,info,id,label){
    let ele=event.target;  //p
    let input=document.createElement('input')
    input.value=info
    input.addEventListener('keyup',(e)=>{
        console.log(e.keyCode)
        if(e.keyCode==13){
            console.log('press enter')
            let updatedValue=e.target.value
            cardsData[id][label]=updatedValue
            createUI()
            localStorage.setItem('cards',JSON.stringify(cardsData))

        }
    })
    input.addEventListener('blur',(e)=>{
             console.log('press enter')
            let updatedValue=e.target.value
            cardsData[id][label]=updatedValue
            createUI()
            localStorage.setItem('cards',JSON.stringify(cardsData))
    
    })
    console.log(input.value)
    let parent=event.target.parentElement
    console.log(parent)
    parent.replaceChild(input,ele)
}

function createUI(data=cardsData,root=ul){
    root.innerHTML=''
    let fragment=new DocumentFragment()
    data.forEach((card,index)=>{
        let li=document.createElement('li')
        let p=document.createElement('p')
        p.innerText=card.category
        p.addEventListener('dblclick',(event)=>{
           handleEdit(event,card.category,index,'category')
        })
        let h2=document.createElement('h2')
        h2.innerText=card.title
        h2.addEventListener('dblclick',(event)=>{
            handleEdit(event,card.title   ,index,'title')
         })
        li.append(p,h2)
        fragment.appendChild(li)
    })

    root.append(fragment)
}

createUI(cardsData,ul)

