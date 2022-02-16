var rocket, rocketImg
var astriod, astriodImg
var background1, background1Img, background2, background2Img
var star, starImg

function preload(){
  rocketImg = loadImage(Rocket.png,"rocket")
  astriodImg = loadImage(Astriod.png,"astriod")
  starImg = loadImage(Star1.png,"star")
  background1Img = loadImage(background1.png,"background1Img")
  background2Img = loadImage(background2.jpg,"background2Img")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

background1 = createSprite (800,400)
background1 = addImage(background1,"background1Img")
velocityY = 1

rocket = createSprite(400, 200, 50, 50)
rocket = addImage(rocket,"rocket")

}

function draw() {
  background(255,255,255);  
  drawSprites();
}