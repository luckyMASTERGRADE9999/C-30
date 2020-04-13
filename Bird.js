class Bird extends BaseClass {
  constructor(_x,_y,_width,_height,_angle){
    super(_x,_y,_width,_height);
    
    var options={
      restitution:1

    }
    this.body = Bodies.rectangle(_x,_y,_width,_height,options);
    this.image = loadImage("assets/ball.png");
    World.add(world, this.body);
    
  }
  
  display() {
    super.display();
    var pos=this.body.position;
    var angle=this.angle;
    push();
    //fill("brown");
    translate(pos.x,pos.y);
  //  rotate(angle);
  // rectMode(CENTER);
  // rect(0,0,this.width,this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
  }  
}
