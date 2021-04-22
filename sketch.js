
var movingRectangle, fixedRectangle;


function setup() {
  createCanvas(800,400);

  movingRectangle = createSprite(800, 300, 50, 80);
  movingRectangle.shapeColor = "pink";
  fixedRectangle = createSprite(600, 200, 90, 20);
  fixedRectangle.shapeColor = "red";
}

function draw() {
  background("orange"); 

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if (movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
    && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
    && movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2
    && fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2) {
  movingRectangle.shapeColor = "blue";
  fixedRectangle.shapeColor = "blue";
}
else {
  movingRectangle.shapeColor = "green";
  fixedRectangle.shapeColor = "green";
}

  drawSprites();
}