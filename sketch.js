
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground1 = new ground(400, 600, 800, 20);

	dustbin1 = new dustbin(550, 580, 20, 100);
	// dustbin2 = new dustbin(560, 580, 100, 20);
	// dustbin3 = new dustbin(640, 580, 20, 100);

	ball1 = new ball(50, 500, 15);
}


function draw() {
	rectMode(CENTER);
	background("#929292");
	ground1.display();
	dustbin1.display();
	// dustbin2.display();
	// dustbin3.display();
	ball1.display();
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.setPosition(ball1.body, { x: 600, y: -85 });
	}
}



