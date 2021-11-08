var mar, barco;
var marImg, barcoImg;

function preload(){
  marImg = loadImage("sea.png");
  barcoImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  //Fondo en movimiento
  mar=createSprite(400,200);
  mar.addImage(marImg);
  mar.velocityX = 8;
  mar.scale=0.4;

  
  barco = createSprite(130,200,30,30);
  barco.addAnimation("movingShip",barcoImg1);
  barco.scale =0.25;
  
}

function draw() {
  background(0);
  mar.velocityX = -3;

  
  //código para reiniciar el fondo
  if(mar.x < 0){
    mar.x = mar.width/5;
  }
    
  drawSprites();
}