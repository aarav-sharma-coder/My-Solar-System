
  
 /* function Planet(){
    
    var radius = random(100,100);
    this.x = random(0, width);
    this.y =random (0,height);
    this.width = radius;
    this.height = radius;
    this.color = this.color;
    this.velocityX=random(-5,+5);
    this.velocityY=random(-5,+5);
    
    this.display = function() {
      stroke(255);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x =this.x+  this.velocityX;
      this.y = this.y+  this.velocityY;
    }
  }*/




var sun;
var planet1,planet2,planet3,planet4,planet5;
//var radius;
function preload()
{
  sunimage=loadImage("sun.png");
  planet1image = loadImage("planet1.png");
  planet2image = loadImage("planet2.png");
  planet3image = loadImage("planet3.png");
  planet4image = loadImage("planet4.png");
  planet5image = loadImage("planet5.png");
}

function setup() {
  createCanvas(2000,700);
  sun=createSprite(500, 350,50,50);
 sun.debug=true;
 sun.setCollider("circle",0,0,120);
 sun.shapeColor="ORANGE";
 sun.addImage(sunimage);
sun.scale=1;




planet1=createSprite(800,350,50,50);
planet1.debug = true;
planet1.setCollider("circle",0,0,90);
planet1.velocityX = -0.2;
planet1.velocityY= -0.2;
planet1.addImage(planet1image);
planet1.scale = 0.3;

planet2=createSprite(150,100,50,50);
planet2.debug = true;
planet2.setCollider("circle",0,0,110)
planet2.velocityX = 0;
planet2.velocityY= 0.2;
planet2.addImage(planet2image);
planet2.scale = 0.4;

planet3= createSprite(250,300,35,35);
planet3.setCollider("circle",0,0,110);
planet3.debug = true;
planet3.velocityX = 0;
planet3.velocityY= 0.1;
planet3.addImage(planet3image);
planet3.scale = 0.4;

planet4=createSprite(550,550,75,75);
planet4.debug = true;
planet4.setCollider("circle",0,0,110);
planet4.velocityX = 0.2;
planet4.velocityY= -0.1;
planet4.addImage(planet4image);
planet4.scale = 0.5;

planet5=createSprite(900,200,60,60);
planet5.setCollider("circle",0,0,100);
planet5.debug = true;
planet5.velocityX = -0.1;
planet5.velocityY= -0.1;
planet5.addImage(planet5image);
planet5.scale = 0.9;


}

function draw() {
  background("black");  

if(World.frameCount%100===0)
{
sun.scale=sun.scale+0.1;
}
if(isTouching(sun,planet1)){
  sun.velocityX=0;
  planet1.destroy();
}
if(isTouching(sun,planet2)){
  sun.velocityX=0;
  planet2.destroy();
}
if(isTouching(sun,planet3)){
  sun.velocityX=0;
  planet3.destroy();
}
if(isTouching(sun,planet4)){
  sun.velocityX=0;
  planet4.destroy();
}
if(isTouching(sun,planet5)){
  sun.velocityX=0;
  planet5.destroy();
}

  drawSprites();
}