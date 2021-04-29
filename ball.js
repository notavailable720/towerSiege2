class Ball  {
    constructor(x, y, radius){
      var options = {
          isStatic: false,
          friction: 0.9,
          density: 100,
          restitution:0.5
      }
      this.body = Bodies.circle(x, y, radius, options)

      World.add(world, this.body);

      this.radius = radius;

      this.image = loadImage("polygon.png");
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  
  };
  