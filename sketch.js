var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(400, 150, 50, 80);
  obj2 = createSprite(400, 750, 50, 80);
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  obj2.x=World.mouseX;
  obj2.y=World.mouseY;




if(isTouching(obj2,obj1)){
  obj1.shapeColor = "blue";
  obj2.shapeColor = "blue";
}
else {
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}  

  drawSprites();
}


function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



