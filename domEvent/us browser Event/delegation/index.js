let allbox=document.querySelector('.allbox')
let h1=document.querySelector('h1')

let colors=['red','green','blue','black','skyblue','yellow',
'orange','pink']


function handleclick(color){
     h1.innerText=color
     h1.style.backgroundColor=color
     console.log(color)
}

let box;
colors.forEach(color=>{
     box=document.createElement('div')
    box.classList.add('box')

      box.addEventListener('click',function(event){
        console.log(event.target)
        handleclick(color)
      })

    allbox.append(box)
    console.log(color)

    box.style.backgroundColor=color
})