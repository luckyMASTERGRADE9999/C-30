class BaseClass{
    constructor(_x, _y, _width, _height,_angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.width= _width;  this.height= _height;
        this.x=_x;  this.y=_y;
        this.angle=_angle;
        this.body = Bodies.rectangle(this.x,this. y,this.width,this.height, options);
        this.image = loadImage("assets/base.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.angle;
    
        push();
        fill("brown");
        translate(pos.x,pos.y);
      //  rotate(angle);
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
       //imageMode(CENTER);
       //image(this.image, 0, 0, this.width, this.height);
       pop();
    }
}


