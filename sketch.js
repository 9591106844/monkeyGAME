
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
 
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("1",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=20;
  
  
  ground=createSprite(200,380,500,15);
  
  
 
  obstacleGroup=new Group();
  foodGroup= new Group();
  
}


function draw() {
  background("white");
  monkey.collide(ground);
  
  
  food();
  stone();
  
  if(keyDown("space")){
    monkey.velocityY=-5;
    
     
  }
  if(monkey.y<100){
      monkey.velocityY=5;
    }
    
  ground.velocityX=-2
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  
  
  score = score +Math.round(getFrameRate()/60);
   
 
  
  drawSprites();
  textSize(20);
  text("Survival Time :"+score,125,50)

  
}
function food(){
 
  
  if(frameCount%80===0){
    
    banana=createSprite(450,Math.round(random(120,200)),20,20);
     banana.addImage("2",bananaImage);
  banana.scale=0.1; 
    banana.lifetime=-1;
     banana.velocityX=-3;
    foodGroup.add(banana);
  
}
}
function stone(){
  
  if(frameCount%300===0){
    
    obstacle=createSprite(500,340,20,20);
  obstacle.addImage("3",obstacleImage);
  obstacle.scale=0.15;
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=-1;
  }
  
}



