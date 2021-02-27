var mrect,frect;

function setup() {
  createCanvas(800,400);
 mrect= createSprite(400, 200, 50, 30);
 mrect.shapeColor="black"
 frect= createSprite(400, 200, 30, 50);
 frect.shapeColor="red"

}

function draw() {
  background(255,255,255);
  mrect.x=mouseX;
  mrect.y=mouseY;  
  //console.log(frect.x-mrect.x)
  if(mrect.x-frect.x< mrect.width/2+frect.width/2 && frect.x-mrect.x< mrect.width/2+frect.width/2
    && mrect.y-frect.y< mrect.height/2+frect.height/2 &&frect.y-mrect.y<mrect.height/2
    +frect.height/2){
    frect.shapeColor="black"
    mrect.shapeColor="red"
  }
  else{
    mrect.shapeColor="black"
    frect.shapeColor="red"
  }
  drawSprites();
}