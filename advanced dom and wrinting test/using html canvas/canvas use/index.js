let canvas =document.querySelector('canvas')
var c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight

let colors=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

function random(){
    return Math.floor(Math.random()*16)
}

function randomColor(){
    let cl='#'
    for(let i=0;i<6;i++){
        cl+=colors[random()]
        console.log(colors[random()])
    }

    return cl
}

console.log(random())
console.log(randomColor())

function circle(x,y,dx,dy,radius){
    this.x=x
    this.y=y
    this.dx=dx
    this.dy=dy
    this.radius=radius

    this.draw=function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fill()
        c.fillStyle=randomColor()
        c.stroke()

        c.beginPath()
        c.moveTo(this.x,this.y)
        c.lineTo(0,0)
        c.strokeStyle=randomColor()
        c.stroke()

        c.beginPath()
        c.moveTo(this.x,this.y)
        c.lineTo(1500,0)
        c.strokeStyle=randomColor()
        c.stroke()
    }

    this.update=function(){
        if(this.x+this.radius > innerWidth || this.x-this.radius <0){this.dx=-this.dx}
        if(this.y+this.radius > innerHeight || this.y-this.radius <0){this.dy=-this.dy}
        this.x+=this.dx
        this.y+=this.dy

        this.draw()
    }
}

let circleArray=[]
for (let index = 0; index < 100; index++) {
    var radius=(Math.random()*20)
    var x=Math.random()*(innerWidth-radius*2)+radius
    var y=Math.random()*(innerHeight-radius*2)+radius
    var dx=(Math.random()-0.5)*4
    var dy=(Math.random()-0.5)*4

    circleArray.push(new circle(x,y,dx,dy,radius))
    
}

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(var i=0;i<300;i++){
        circleArray[i].update()
    }
}

animate()

// var radius=30

// var x=Math.random()*(innerWidth-radius*2)+radius
//     var y=Math.random()*(innerHeight-radius*2)+radius
//     var dx=(Math.random()-0.5)*10
//     var dy=(Math.random()-0.5)*8

// function animate(){
//     requestAnimationFrame(animate)
//     c.clearRect(0,0,innerWidth,innerHeight)

//     c.beginPath()
//     c.arc(x,y,radius,0,Math.PI*2,false)
//     c.strokeStyle='blue'
//     c.stroke()

//     if(x+radius > innerWidth || x-radius <0){dx=-dx}
//         if(y+radius > innerHeight || y-radius <0){dy=-dy}
//         x+=dx
//         y+=dy

// }

// animate()