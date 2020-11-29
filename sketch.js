var bullet ; 
var wall ; 
var speed; 
var weight; 
var thickness

function setup() {
createCanvas(800,800) ; 

 speed = random(2,3);
 weight = random(30,52) ; 
 thickness = random(22,83) ; 

bullet = createSprite(50,200,50,50) ; 
bullet.shapeColor = "black" ; 
wall = createSprite(700,200,thickness,height/2) ;
}

function draw () {
background("white") ; 
bullet.velocityX = speed ; 

if(isCollided(bullet,wall)) {
  
  bullet.velocityX = 0 ; 
  
  var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness

  if(damage>10) {
    bullet.shapeColor = "red" ; 
  }
  if(damage<10) {
    bullet.shapeColor = "green" ; 
  }
  
}


  drawSprites() ; 
}

function isCollided(bullet,wall) {

bulletRightEdge=bullet.x + bullet.width ;
wallLeftEdge=wall.x 

if(bulletRightEdge>=wallLeftEdge)
 {
  return true 
}
 return false ;  

}
