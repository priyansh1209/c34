const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var building = []
var ball
var ground
var rope

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(400,390)
   ball = new Ball()
    rope = new Chain(ball.body,{x:275,y:1})
    for(var i=500;i<=700;i+= 20){
        for(var j=150;j<=350;j+=20){
            building.push(new Block(i,j))
        }
    }
   
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var l = 0;l<building.length;l++){
        building[l].display()
    }
   
    ground.display()
    ball.display()
    rope.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}