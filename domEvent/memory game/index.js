// Card data
const cardsArray = [
  {
    name: 'shell',
    img: 'img/blueshell.png',
  },
  {
    name: 'star',
    img: 'img/star.png',
  },
  {
    name: 'bobomb',
    img: 'img/bobomb.png',
  },
  {
    name: 'mario',
    img: 'img/mario.png',
  },
  {
    name: 'luigi',
    img: 'img/luigi.png',
  },
  {
    name: 'peach',
    img: 'img/peach.png',
  },
  {
    name: '1up',
    img: 'img/1up.png',
  },
  {
    name: 'mushroom',
    img: 'img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: 'img/thwomp.png',
  },
  {
    name: 'bulletbill',
    img: 'img/bulletbill.png',
  },
  {
    name: 'coin',
    img: 'img/coin.png',
  },
  {
    name: 'goomba',
    img: 'img/goomba.png',
  },
]

let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')
let btn = document.querySelector('button')

let gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => 0.5 - Math.random())

const game = document.getElementById('game')

const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.appendChild(grid)

gameGrid.forEach((item) => {
  // console.log(item.img);
  let card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name

  let front = document.createElement('div')
  front.classList.add('front')

  let back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(./${item.img})`

  setTimeout(() => back.style.transform = 'rotateY(180deg)', 100)

  card.appendChild(front)
  card.appendChild(back)
  grid.appendChild(card)
})

let firstGuess = ''
let secondGuess = ''
let count = 0
let previousTarget;
let delay = 800
let move = 0
let timeCount = 0
let finish = 12

function match() {
  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}
function reset() {
  firstGuess = ''
  secondGuess = ''
  count = 0
  previousTarget = ''
  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.remove('selected')
  })
}


function addTime() {
  timeCount++
  h3.innerText = `TIME : ${timeCount} Sec`
  time = setTimeout(addTime, 1000)
}
addTime()
grid.addEventListener('click', (event) => {
  let clicked = event.target
  // addTime()
  if (clicked.nodeName === 'SECTION' || previousTarget == clicked ||
    clicked.parentNode.classList.contains('selected')) {
    return
  }

  if (count < 2 && finish > 0) {
    move++
    count++
    h2.innerText = `MOVE : ${move}`
    // console.log(count)
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name
      clicked.parentNode.classList.add('selected')
    } else {
      secondGuess = clicked.parentNode.dataset.name
      clicked.parentNode.classList.add('selected')
    }
    if (firstGuess != '' && secondGuess != '') {
      if (firstGuess == secondGuess) {
        setTimeout(match, delay)
        setTimeout(reset, delay)
        finish--
        if (finish == 0) {
          clearTimeout(time)
          p.innerText = `You finished the game in ${move} moves !`
        }
      } else {
        setTimeout(reset, delay)
      }
    }
    previousTarget = clicked
  }
})

btn.addEventListener('click', () => location.reload())

