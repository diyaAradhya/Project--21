const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball1;
var ground1;
var basket1,basket3;


function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;
  


	  ball1 =new Ball(260,100,25);
    ground1=new Ground(width/2,670,width,20);
    basket1=new Ground(1000,600,20,200);
	  basket3=new Ground(1300,600,15,200);

    Engine.run(engine);

  
}


function draw() {
  background(0);
  rectMode(CENTER);
  

  Engine.update(engine);

  
  basket1.display();
  basket3.display();
  ball1.display();
  ground1.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}

}


