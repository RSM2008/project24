
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	
	isStatic : false,
	restitution:0.3,
	friction:0.5,
	density :1.2
}

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paperSprite = createSprite(35,670,20,20);
	paperSprite.shapeColor("purple");

	paperBody = Bodies.circle(35,670,20,20);
	

	groundSprite = createSprite(400,680,20,10);
	groundSprite.shapeColor("white");
	groundBody = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world,ground);

	boxPosition=width/2-100
 	boxY=610;

	boxleftSprite = createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor = color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);












	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  








  
  
  drawSprites();
 
}


function keyPressed(){
      if(keyCode ===UP_ARROW) {

		Matter.Body.applyForce(paperObject.body.position,{x:85,y:-85});
	  }




}
