var bullet,wall;
var speed,weight,thickness;

function setup() {
 createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(100,200,thickness,3);
  wall = createSprite(1200,200,50,height/2);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

}

function draw() {
  background("black"); 
    
  if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
   wall.shapeColor="green"; 
  }
  if(damage>10){
    wall.shapeColor="red"; 
   }
 }
    drawSprites();
}
function hasCollided(lbullet,lwall){
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
 else{ 
   return false;
  } 
 
}