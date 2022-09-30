
let user = document.querySelector('.user-icon')
let computer = document.querySelector('.computer-icon')
let result = document.querySelector('.result')
let userinput=document.querySelector('.user-input')
let computerinput=document.querySelector('.computer-input')


let userselected = {},
    computerselected = {}

let userdata = [
    {
        name: 'rock ',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

function randomnumber(max = 3) {
    return Math.floor(Math.random() * max)
}

function getwinner(user, computer) {
    if (user.name == computer.name ) {
        result.innerText = "it's tie"
        userinput.innerText=0
        computerinput.innerText=0
         } else if (user.beats == computer.name) {
        result.innerText = "user win"
        userinput.innerText= 1
        computerinput.innerText='0'
    } else {
        result.innerText = 'computer win'
        userinput.innerText='0'
        computerinput.innerText= 1
    }
}

function userlayout() {
    user.innerHTML=""
    userdata.forEach(icon => {

        let i = document.createElement("i")
        i.className = `fa fa-hand-${icon.name}-o`
        i.classList.add('useri')
        i.id = icon.name
        user.append(i)

        i.addEventListener('click', function () {
            userselected = icon
            computerselected = userdata[randomnumber()]
            userlayout()
            computerlayout()
               

            getwinner(userselected,computerselected)
            console.log(userselected,computerselected)
            
        })

    })
}

userlayout()


function computerlayout() {
    computer.innerHTML=''
    userdata.forEach(icon => {
        let i = document.createElement("i")
        i.className = `fa fa-hand-${icon.name}-o`
        i.classList.add('useri')
        computer.append(i)
    })
}

computerlayout()

let reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    userinput.innerText = ''
    computerinput.innerText = ''
    result.innerText=''
    userlayout()
    computerlayout()

})




