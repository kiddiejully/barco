var bg
var barcoImg
var barco
var backgroundImg 
function preload(){
barcoImg = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
backgroundImg = loadImage ("sea.png");


}

function setup(){
  createCanvas(400,400);
  bg = createSprite(200,200);
  bg.addImage (backgroundImg);
  bg.scale = 0.4;
  bg.velocityX = -5;




  barco = createSprite(200,200);
  barco.addAnimation ("barco", barcoImg);
  barco.scale = 0.4;
 

}

function draw() {
  background("blue");
  if(bg.x <0){
  bg.x = 200;
  //bg.x = bg.width/2
  }
    drawSprites();
  
 
}
