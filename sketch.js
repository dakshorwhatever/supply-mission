var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3,box1Body,box2Body,box3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 700, 800,20);
	groundSprite.shapeColor=color(255)
    
	box1 = createSprite(700,690,100,10);
	box1.shapeColor = "red"
	box2 = createSprite(650,650,10,100);
	box2.shapeColor = "red"
	box3 = createSprite(750,650,10,100);
	box3.shapeColor = "red"
	

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 640, 800, 20 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.rectangle(width/2 , 200 , 10 , 10, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	fill("green")
	
	box1Body = Bodies.rectangle(350, 690, 100, 10 , {isStatic:true} );
	World.add(world, box1Body);

	box2Body = Bodies.rectangle(300, 650, 100, 10 , {isStatic:true} );
	World.add(world, box2Body);

	box3Body = Bodies.rectangle(400, 650, 100, 10 , {isStatic:true} );
	World.add(world, box3Body);
	console.log(box1Body)

	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y+50 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
  }
  if (keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x-5;
	  Matter.Body.translate(packageBody,{x:-5, y:0})  }
	  if (keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x+5;
		Matter.Body.translate(packageBody,{x:5, y:0})
	  }

}



