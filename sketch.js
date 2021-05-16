const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world, box1, ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = Bodies.rectangle(300, 300, 50 ,50);
  World.add(world, box1);
  var opt = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 380, 400 ,20,opt);
  World.add(world, ground);
  var bounce ={
    restitution: 0.8
  }
  ball = Bodies.circle(200,200, 20,bounce);
  World.add(world, ball);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(box1.position.x, box1.position.y, 50,50);

  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y , 20);

  drawSprites();
}