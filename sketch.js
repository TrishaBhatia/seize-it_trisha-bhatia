var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var bg,bg_img;
var go,s1;

function preload()
{
  bg=loadImage("intro.png")
  go=loadImage("gm.png")
  s1=loadImage("state.png")
}
function setup() {
  createCanvas(390,400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(bg)
		
		reset();
}

function gameOn(){
	background(go)
  fill("black")
  textSize(20);
  text("SCORE = " + score, 30,20)
    fill("white")
  ellipse(x,y,20,20)
  rectMode(CENTER)
  rect(mouseX,height-10,50,30)
	y+= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.8
    score+= 1
  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(35,width-30)
}

function endScreen(){
		background(s1)
		textAlign(CENTER);
        textSize(20);
  fill("black")
		text('GAME OVER!!',200,150)
  	text("YOUR SCORE WAS: " + score,200,190)
		text('Click to Play Again',200,230);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
