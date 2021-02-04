
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var dropbox
var dropbox2
var dropbox1
var ground

function preload()
{
	dustbinimage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,660,800,15)
	//Create the Bodies Here.
	ball = new Ball(100,655,70)
	dropbox1 = new Box(400,655,200,25);
	dropbox2 = new Box(500,618,20,100);
	dropbox3 = new Box(300,618,20,100);
	Engine.run(engine);
  
	
}







function draw() {
  rectMode(CENTER);
  background(255);
  dropbox1.display();
  dropbox2.display();
  dropbox3.display();
  ball.display();
  drawSprites();
  ground.display();
 imageMode(CENTER)
 image(dustbinimage,400,605,250,125)
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		console.log("keypressed")
		Matter.Body.applyForce(ball.body,ball.body.position,{x:290,y:-950})
	}
}
