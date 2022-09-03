class Boat {
  constructor(x, y, w, h,boatPosition,animation) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.boatPosition=boatPosition
    this.animation=boatAnimation
    this.speed=0.05

    var options = {
      //restitution: 0.8,
      friction: 1,
      density: 1,
    };

    this.body=Bodies.rectangle(this.x, this.y, this.w, this.h,options);
    World.add(world, this.body);
    this.image = loadImage("assets/boat.png");
  }

  animate(){
    this.speed+=0.05
  
  }

  display() {
    var pos=this.body.position
    var angle=this.body.angle

    var index=floor(this.speed % this.animation.length)
    console.log("animation index",index)

    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.animation[index],0,this.boatPosition,this.w,this.h)
    pop()
  }
}
