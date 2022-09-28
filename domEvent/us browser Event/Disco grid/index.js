// Create 500 boxes of size (4rem and 4rem)
// Each box will contain a random number from 0 - 500
// When moving the mouse over the boxes the background color of each box should change to some random color.
// Along with random color the random number should also change

let bigbox=document.querySelector('.flex')

for(let i=0;i<500;i++){
    let Div=document.createElement('div')
    Div.className='box'
    bigbox.append(Div)
}

function generateRandomColor(){
    let hexCharacter=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let color='#'
    for(let i=0;i<6;i++){
        let randomNumber=Math.floor(Math.random()*16)
        color=color+hexCharacter[randomNumber]
    }
    return color
}

// console.log(generateRandomColor())

function generateRandomNumber(){

n=Math.floor(Math.random()*500 )

random=n

return random
}


function handler(){
document.querySelectorAll(".box").forEach(n=>{
    n.innerHTML=generateRandomNumber()
    n.style.background=generateRandomColor()
})

}

bigbox.addEventListener('mousemove',handler)