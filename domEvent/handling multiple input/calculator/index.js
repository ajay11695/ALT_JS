let allbox=document.querySelectorAll('.box')
let display=document.querySelector('.display')

let initialvalue=0

function handleClick(event){
    console.log(event.target.innerText)
    if(event.target.innerText=='='){
    display.innerText=eval(display.innerText)
        return ;
    }
    
    if(event.target.classList.contains('clear')){
        display.innerText=initialvalue;
   return;
    }

    if(display.innerText==initialvalue){
        display.innerText=event.target.innerText
    }else{
        display.innerText+=event.target.innerText
    }

}

allbox.forEach(box=>box.addEventListener('click',function(event){
    handleClick(event)
})
)

display.innerHTML=initialvalue
