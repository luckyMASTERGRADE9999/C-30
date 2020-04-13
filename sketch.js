// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine = Matter.Engine;
// The above line creates different constant variables for Engine, World, Bodies etc.
const { World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
//var backgroundImg;
var angle;
var ground, platform1;
var shot,slingshot;
var flag="loaded";

//Parameters for Pyramid
var itemsA=[];//an array
var noRows=11;//no of rows <=no of columns
var noCols=12;
var pyramidx=450;
var pyramidy=390;
var item;


function preload() {          
   // backgroundImg = loadImage("Images/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new BaseClass(500,canvas.height-10,1000,20);
    platform1 = new Platform(100, canvas.height-75,250, 100);
    platform2 = new Platform(900, 200, 200, 20, 350);

    shot = new Bird(100,50,20,20);
    slingshot=new SlingShot(shot.body,{ x:190, y:130});

    pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
    pyramid=pyramid.conPyramid();  
  
    World.add(world,[platform1,platform2,shot,ground]);
}

// Remember to update the Matter Engine and set the background.
function draw() {
  background("cyan");
  Engine.update(engine);
   
  ground.display();
  slingshot.display();
  platform1.display();
  platform2.display();   
  
  shot.display();

  pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
  pyramid.display();
  
  message();

 }
 
function mouseDragged(){
  if (flag!=="launched"){
      Matter.Body.setPosition(shot.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingshot.shoot();
  flag = "launched";
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    shot.image = loadImage("assets/enemy.png"); 
    shot.restitution=5;
  }else if(keyCode === RIGHT_ARROW){
    shot.image = loadImage("assets/horseshoe.png");
    shot.restitution=2;
  }else if(keyCode === 32){
    Matter.Body.setPosition(shot.body,{x:200,y:50});
     slingshot.attach(shot.body);
     flag="loaded";
  }
}


function  message(){
  textSize(15);
  stroke(25,10,5);
  fill(25,0,250);
  text('MOUSE  DRAG  &  CLICK  to ... HIT',50,25);
  text('Press SPACE to Reload ...',50,50);
  text('Press  LEFT--RIGHT ARROW to change the SHOT',50,75);
  
}
