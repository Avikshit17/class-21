var moving,fixed,object1,object2;
 
function setup() {
  createCanvas(600,600);
 moving=createSprite (500,300,50,50);
 moving.shapeColor="red";
 object1=createSprite(150,300,50,50);
 object1.shapeColor="red";
 object2=createSprite(250,300,50,50);
 object2.shapeColor="red";
 fixed=createSprite(350,300,50,50);
 fixed.shapeColor="red";
 
 //moving.velocityX=-3;
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;
   
 var result= isTouching(moving,object2);
 if(result==true)
 {
   moving.shapeColor="blue";
   object2.shapeColor="blue";
 }
 else
 {
   moving.shapeColor="red";
   object2.shapeColor="red";
   }
  //bounceOff();
  drawSprites();
}

function bounceOff()
{
  if(fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.x-fixed.x<moving.width/2+fixed.width/2)
  {
    moving.velocityX=moving.velocityX*-1;
  }
}