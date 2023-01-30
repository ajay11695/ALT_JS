var canvas=document.querySelector('canvas')
 canvas.width=390
 canvas.height=360

var ct=canvas.getContext('2d')

var ballRadius=10
var x=canvas.width/2
var y=canvas.height-30
var dx=2
var dy=-2
var paddleWidth=75
var paddleHeight=10
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 68;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 5;
var score = 0;
var lives = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    console.log(e.key)
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    console.log(e.clientX,canvas.offsetLeft)
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        var b = bricks[c][r];
        if(b.status == 1) {
          if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
            console.log(x,b.x,y,b.y)
            dy = -dy;
            b.status = 0;
            score++;
            if(score == brickRowCount*brickColumnCount) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            }
          }
        }
      }
    }
  }

function drawBall(){
    ct.beginPath()
    ct.arc(x,y,ballRadius,0,Math.PI*2,false)
    ct.fillStyle='blue'
    ct.fill()
    ct.closePath()
}

function drawPaddle(){
    ct.beginPath()
    ct.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight)
    ct.fillStyle='blue'
    ct.fill()
    ct.closePath() 
}

function drawBricks(){
    for(var c=0;c<brickColumnCount;c++){
        for(var r=0;r<brickRowCount;r++){
            if(bricks[c][r].status==1){
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x=brickX
                bricks[c][r].y=brickY
                ct.beginPath()
                ct.rect(brickX,brickY,brickWidth,brickHeight)
                ct.fillStyle='blue'
                ct.fill()
                ct.closePath()
            }
        }
    }
}

function drawScore(){
    ct.beginPath()
    ct.font='16px Arial'
    ct.fillStyle='red'
    ct.fillText("Score:"+score,8,20)
    ct.closePath()
}

function drawLives(){
    ct.font='16px Arial'
    ct.fillStyle='red'
    ct.fillText("Lives:"+lives,canvas.width-65,20)
}

function draw(){
    
    ct.clearRect(0,0,canvas.width,canvas.height)
    drawBall()
    drawPaddle()
    drawBricks()
    drawLives()
    drawScore()
    collisionDetection()

    if(x+dx > canvas.width-ballRadius || x+dx < ballRadius){
        // console.log(x+dx,canvas.width-ballRadius)
        dx=-dx
    }

    if(y+dy < ballRadius){
        // console.log(y+dy)
        dy=-dy
     }else if(y+dy > canvas.height-ballRadius){
        // console.log(y+dy,x)

        if(x>paddleX && x < paddleX+paddleWidth){
            dy=-dy
       }else{
            lives--
            if(!lives){
                alert('GAME OVER')
                document.location.reload()
            }else{
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
     }

    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX+=7
    }else if(leftPressed && paddleX > 0){
        paddleX-=7
    }

    x+=dx
    y+=dy

    requestAnimationFrame(draw)

}

draw()
