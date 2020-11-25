
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var ground;
var tree;

function preload()
{
	BOY = loadImage("boy.png");
	TREE = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(160,580,50,50);
	boy.addImage(BOY);
	boy.scale = 0.1;
	
	ground = createSprite(400,650,800,20);
	ground.shapeColor = "brown";

	tree = createSprite(560,420,50,50);
	tree.addImage(TREE);
    tree.scale = 0.4;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(102, 204, 255));

  boy.display();
  ground.display();
  tree.display();
  
  drawSprites();
 
}



