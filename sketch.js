
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var roof_options = {
		isStatic : true
	}
	roof = Bodies.rectangle(400,100,200,20,roof_options)
	World.add(world ,roof)

	var ballOptions = {
		isStatic:false , 
		restitution:1 , 
		density:0.8 
	}
    ball1  = Bodies.circle(320 , 380 , 20 , ballOptions)
	World.add(world,ball1 )

	ball2  = Bodies.circle(320 , 380 , 20 , ballOptions)
	World.add(world,ball2 )

	ball3  = Bodies.circle(320 , 380 , 20 , ballOptions)
	World.add(world,ball3 )

	ball4  = Bodies.circle(320 , 380 , 20 , ballOptions)
	World.add(world,ball4 )

	ball5  = Bodies.circle(320 , 380 , 20 , ballOptions)
	
	World.add(world, ball5 )

	rope1 = new Rope(ball1 , roof , -80 ,  0)
	rope2 = new Rope(ball2 , roof , -40 ,  0)
	rope3 = new Rope(ball3 , roof ,  0  ,  0)
	rope4 = new Rope(ball4 , roof ,  40 ,  0)
	rope5 = new Rope(ball5 , roof ,  80 ,  0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill('#712934')
  rect(roof.position.x , roof.position.y , 250 , 20)
  ellipse(ball1.position.x , ball1.position.y , 20 , 20)
  ellipse(ball2.position.x , ball2.position.y , 20 , 20)
  ellipse(ball3.position.x , ball3.position.y , 20 , 20)
  ellipse(ball4.position.x , ball4.position.y , 20 , 20)
  ellipse(ball5.position.x , ball5.position.y , 20 , 20)
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}



