
//we create an object item first and the create an array of those objects

class PyrItem{
  constructor(_x,_y,_width,_height){
    var options={
    restitution:0.6, 
    stiffness:0.002,  
    isStatic:false
    }  
    this.x=_x;  this.y=_y;
    this.width= _width;  this.height= _height;
    //this.angle=_angle;
    this.body = Bodies.rectangle(this.x,this. y,this.width,this.height, options);
    //this.image = loadImage("assets/base.png");
    World.add(world, this.body);
    
  }

  display() { 
   var pos=this.body.position;
   push();
  //   var ranR=floor(random(10,255));
  //   var ranB=floor(random(25,100));
  //   var ranG=floor(random(100,250));
  //  fill(ranR,ranB,ranG);
  //  fill(255,10,10);
   translate(pos.x,pos.y);
  // rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
  //imageMode(CENTER);
  //image(this.image, 0, 0, this.width, this.height);
  pop();

  }
}
