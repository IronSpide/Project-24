
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var box1
var box2
var box3

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(400,650,800,100)
	paper = new Paper(50,590,15)
	box1 = new Box(600,575,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundSprite.display()
  paper.display()
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
 
}



