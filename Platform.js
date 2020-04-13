class Platform extends BaseClass{
  constructor(_x, _y, _width, _height,_angle) {
    var options ={
      restitution:0.2,
      isStatic : true,
      
    }
    super(_x,_y,_width,_height,_angle)
   // this.body=Bodies.rectangle (_x,_y,_width,_height,_angle,options); 
    this.angle=_angle;
    Matter.Body.setAngle(this.body, this.angle);
    World.add(world,this.body);
  }

  display(){
    var pos=this.body.position;
    var angle=this.angle;
  //  super.display();
    
    push();
    fill("green");
    translate(pos.x,pos.y);
    rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
   //imageMode(CENTER);
   //image(this.image, 0, 0, this.width, this.height);
   pop();


  };


}