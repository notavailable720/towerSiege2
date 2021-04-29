class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("./can.png");
    this.visibility = 255;
  }

  display() {
    if(this.body.velocity < 10) {
      super.display();
    } else {
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      World.remove(world, this.body);
    }
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    //console.log(this.body.visibility);
  }
};
