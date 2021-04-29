const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ground;
var stand1, stand2;
var slingshot, ball;

function preload() {
    polygon_Image =  loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 395, 800, 10);

    stand1 = new Ground(300, 340, 170, 10);
    stand2 = new Ground(600, 250, 100, 10);

    ball = new Ball(50, 200, 40);
    ball1 = Bodies.circle(50, 200, 40);
    World.add(world, ball1);
    slingshot = new Slingshot1(ball1, {x:150, y:300});

    //level 1
    block1 = new Box(300, 335, 30, 40);
    block2 = new Box(270, 335, 30, 40)
    block3 = new Box(260, 335, 30, 40)
    block4 = new Box(330, 335, 30, 40)
    block5 = new Box(350, 335, 30, 40)
    //level 2
    block6 = new Box(300, 250, 30, 40)
    block7 = new Box(270, 250, 30, 40);
    block8 = new Box(330, 250, 30, 40);
    //level 3
    block9 = new Box(300, 210, 30, 40);
    //level 1 Tower 2
    block10 = new Box(600, 245, 30, 40);
    block11 = new Box(570, 245, 30, 40);
    block12 = new Box(630, 245, 30, 40);
    //level 2
    block13 = new Box(600, 190, 30, 40)

}

function draw() {
    background(50, 50, 50)

    Engine.update(engine);

    
    ground.display();

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    //ball.display();
    image(polygon_Image, ball1.position.x, ball1.position.y, 40, 40);
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(this.ball1, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.fly();
}