const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball,Boptions,Goptions;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  Goptions={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,Goptions);
  World.add(world,ground);
 Boptions={
   restitution:1.0,friction:1.0
 }
  ball=Bodies.circle(200,200,20,Boptions);
  World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20);
ellipse(ball.position.x,ball.position.y,20,10);

  drawSprites();
}