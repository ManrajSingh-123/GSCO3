

var car;
var wall;
var speed;
var weight;

function setup(){
  speed=random(55,90);
  weight=random(400,1500);

  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  
  car.shapeColor="white";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
}
function draw(){
  car.velocityX=speed;
  background("black");
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/22500
    if(deformation>180){
      car.shapeColor=color(255,0,0);
  }
  if(180>deformation&&deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
}

  drawSprites();

}
