const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var paper1;
var ground1;
var box1;
var box2;
var box3;
function setup() {
  createCanvas(1200,400);
myEngine = Engine.create();
myWorld =myEngine.world



paper1=new  Paper(100,200,50);
ground1 = new Ground(600,height,1200,20);
box1= new Box(900,380,150,20);
box2=new Box(825,340,20,100);
box3= new Box(970,340,20,100);

}

function draw() {
  background(0); 
  Engine.update(myEngine);

paper1.display();
ground1.display();
box1.display();
box2.display();
box3.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-90})
  }
}