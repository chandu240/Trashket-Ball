var box1sprite,box2sprite,box3sprite,box1,box2,box3,ground;
var paperBody,paperSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	fill(255,0,0)
	paperSprite = createSprite(100,200,10,10)
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1sprite = createSprite(600,height-45,200,20);
	box2sprite = createSprite(500,height-85,20,100);
	box3sprite = createSprite(700,height-85,20,100);
	box1 = Bodies.rectangle(width/2,200,200,20,{isStatic:true});
	box2 = Bodies.rectangle(300,200,100,20,{isStatic:true});
	box3 = Bodies.rectangle(500,200,100,20,{isStatic:true});
	
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	var options={
		isStaitc:true,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paperBody = Bodies.rectangle(100,640,10,10,options)
	World.add(world, paperBody)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  keyPressed()
  drawSprites();
}
function keyPressed() {
	if (keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(paperBody,paperBody.position,{x:2,y:-2});
	}
}



