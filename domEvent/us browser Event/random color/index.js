// Create two boxes with buttons in center
// First button with click and second with move your mouse label
// When clicked in the first box the background of the box should change to any random color
// When moving the mouse in box 2 will change the background of the the box to random color

let box1=document.querySelector('.box1')
let box2=document.querySelector(".box2")

// #ffaa11

function generateRandomColor(){
    let hexCharacter=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    let color='#'
    for(let i=0; i<6;i++){
        let randomNumber=Math.floor(Math.random()*16)
        color=color+hexCharacter[randomNumber]
    }
    return color
}

// console.log(generateRandomColor())

function handleclick(){
    let randomColor=generateRandomColor()
    box1.style.backgroundColor=randomColor
}

function handlemousemove(){
    let randomColor=generateRandomColor()
    box2.style.backgroundColor=randomColor
}


box1.addEventListener('click',handleclick)
box2.addEventListener('mousemove',handlemousemove)