var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);
 bullet =  createSprite(50, 200, 50, 5);
 speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
 wall = createSprite(1100,200,thickness,400);
 bullet.velocityX = speed;
bullet.shapeColor = "gold";

  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x <(bullet.width/2+wall.width/2)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);}
    if(damage>10){
      wall.shapeColor =color(255,0,0);

  }
  

    if(damage<=10){
      wall.shapeColor =color(0,255,0);
    }
  
  
  drawSprites();
}
