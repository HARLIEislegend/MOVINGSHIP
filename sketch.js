var ship_ani;
var ship;

var sea;
var sea_Img;


function preload(){

sea_Img = loadImage("sea.png")  
ship_ani = loadAnimation("ship1.png","ship2.png");
}



function setup(){
  createCanvas(400,400);
//moving BACKGROUND
  sea = createSprite(400,200);
  sea.addImage(sea_Img);
  sea.velocityX = -3;
  sea.scale = 0.4;
  
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("Moving ship",ship_ani);
  ship.scale = 0.3
  
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  if (sea.x<0){
    sea.x = sea.width/8;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}