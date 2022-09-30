// Flip Box
// There are two boxes each box contains 12 small boxes
// When you click on the small boxes it will show the number from 1 to 12 and disappear in next 5 seconds
// In first box do it using multiple event listeners
// In second box do it using event delegation


let box1=document.querySelectorAll('.multiple .box')
 
box1.forEach((box,index)=>{
    box.addEventListener('click',function(event){
        event.target.innerText=index +1

        setTimeout(()=>{
            event.target.innerText=""
        },5000)
    })
})


let box2=document.querySelector('.delegation')

    box2.addEventListener('click',(event)=>{
    let text=event.target.dataset.text
    event.target.innerText=text
    // console.log(text)

    setTimeout(()=>{
        event.target.innerText=""
    },5000)
})

