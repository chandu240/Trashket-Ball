var box1sprite,box2sprite,box3sprite,box1,box2,box3,ground;
var paperBody,paperSprite, paperImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	paperImage=loadImage("paper.png")
	
}

function setup() {
	createCanvas(800, 700);
	fill(255,0,0)
	paperSprite = createSprite(100,200,10,10);
	paperSprite.addImage(paperImage)
	paperSprite.scale=0.4
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
		isStaitc:false,
		restitution:0.3,
		friction:1,
		density:1.2
	}
	paperBody = Bodies.rectangle(100,640,38,38,options)
	World.add(world, paperBody)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  keyPressed()
  drawSprites();
}
function keyPressed() {
	if (keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(paperBody,paperBody.position,{x:9,y:-9});
	}
}



