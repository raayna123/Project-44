const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var b1, b2, b3, b4, b5;

var knife, apple, banana, pineapple, orange, grapes;
var knifeImage, appleImage, bananaImage, pineappleImage;
var orangeImage, grapesImage;

function preload() {
    knifeImage = loadImage("images/knifeImg.png");
    appleImage = loadImage("images/appleImg.png");
    bananaImage = loadImage("images/bananaImg.png");
    // pineappleImage = loadImage("images/pineapple.png");
    orangeImage = loadImage("images/orangeImg.png");
    grapesImage = loadImage("images/knifeImg.png");
}

function setup() {
    createCanvas(800, 700);

    b1 = createSprite(400, 5, 800, 10);
    b1.visible = false;
    b2 = createSprite(5, 350, 10, 700);
    b2.visible = false;
    b3 = createSprite(795, 350, 10, 700);
    b3.visible = false;
    b4 = createSprite(400, 500, 800, 10);
    b4.visible = false;
    b5 = createSprite(400, 695, 800, 10);
    b5.visible = false;

    knife = createSprite(400, 620, 20, 60);
    knife.addImage("knife", knifeImage);
    knife.scale = 0.2;

    apple = createSprite(100, 50, 20, 20);
    apple.addImage("apple", appleImage);
    apple.scale = 0.1;
    apple.velocityX = 5;
    apple.velocityY = 3;

    engine = Engine.create();
    world = engine.world;
    
    

    Engine.run(engine);
}

function draw() {
    background("lightBlue");
    Engine.update(engine);


    if(keyDown(LEFT_ARROW)) {
        knife.x = knife.x - 25;
    }
    if(keyDown(RIGHT_ARROW)) {
        knife.x = knife.x + 25
    }
    if(keyDown("SPACE")) {
        knife.velocityY = -10;
    }


    apple.bounceOff(b1);
    apple.bounceOff(b2);
    apple.bounceOff(b3);
    apple.bounceOff(b4);
    // knife.bounceOff(b1);
    knife.bounceOff(b2);
    knife.bounceOff(b3);
    knife.bounceOff(b5);


    drawSprites();
}