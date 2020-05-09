var wall, car;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, height/2);
  car = createSprite(50,200,50,50);
  
  speed = random(55,90);
  speed = Math.round(speed);
  weight = random(400,1500);
  weight = Math.round(weight);
  deformation = (0.5 * weight * speed * speed)/22500;
  deformation = Math.round(deformation);
}

function draw() {
  background(255,255,255); 
  car.velocityX = speed;
 text(speed,800,50);
text(deformation,800,100);
text(weight,800,10);
  if(car.collide(wall) ){
    
   if(deformation < 100){
      car.shapeColor = "green";

    }

    if(deformation > 100 && deformation < 180){
     car.shapeColor = "yellow";
     //text("boom",800,200);
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }

  
  
}
drawSprites();
}