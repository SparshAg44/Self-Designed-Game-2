/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

//var engine;
//var  engine, world;
var bg1 ,girl, girlWalk, girlJump, girlDead;
var momImage , mom;
var ground,bg2,bg3,start,start1;
var obstacle1 ,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstaclesGroup;
var gameState = "OP";
function preload(){
bg1 = loadImage("62.jpeg");
bg3 = loadImage("890.jpg");
start1 = loadImage("0.png");
obstacle1 = loadImage("cactus.png");
obstacle2 = loadImage("cactus.png");
obstacle3 = loadImage("cactus.png");
obstacle4 = loadImage("cactus.png");
obstacle5 = loadImage("cactus.png");
obstacle6 = loadImage("cactus.png");
girlWalk = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png",
"Run5.png","Run6.png","Run7.png","Run8.png");
/*girlJump = loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png",
"Jump (7).png","Jump (8).png","Jump (9).png","Jump (10).png");
girlDead = loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (4).png","Dead (5).png","Dead (6).png",
"Dead (7).png","Dead (8).png","Dead (9).png","Dead (10).png")*/
}

function setup(){
    createCanvas(1000,350);
    /*engine = Engine.create();
    world = engine.world;
    Engine.run(engine);*/

    bg2 = createSprite(0,174,1000,350);
    bg2.addImage('abc' ,bg1);
    bg2.velocityX = -5;
    //bg2.scale = 0.85
    girl = createSprite(70,260,20,20);
    girl.addAnimation("abc" ,girlWalk);
    girl.scale = 0.2;

    ground = createSprite(350,340,1300,5);
    ground.visible = false
    
    start = createSprite(450,270,10,10);
    start.addImage("st" ,start1);
    start.scale = 0.1
obstaclesGroup = new Group();
   /* if(frameCount % 60 === 0) {
        var obstacle = new Box(600,165,10,40);
        obstacle.debug = true;
        obstacle.velocityX = -(6 + 3*score/100);
        
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
          case 4: obstacle.addImage(obstacle4);
                  break;
          case 5: obstacle.addImage(obstacle5);
                  break;
          case 6: obstacle.addImage(obstacle6);
                  break;
          default: break;
        }}*/
}

function draw(){
    background(bg3);
    if(gameState=="OP"){
        textSize(55);
        textFont('Impact');
        fill("#a8674d");
        text(" [  WILD WILD WEST  ]",250,80);
        textSize(22);
        textFont('Cambria');
        fill("black");
        text("There is an evil doer (not from earth) who wants to destroy all planets in the solar system, ",90,130)
       text("But only earth has the machine that can destroy all of them,",190,170);
         text("Unfortunately he has already acquired the device but it still has some time before it can detonate.",90,210);
         girl.visible = false;
         ground.visible = false;
         bg2.visible = false;
         if(mousePressedOver(start)){
             gameState="PLAY";
         }
    }
if(gameState=="PLAY"){
if(bg2.x <400){
    bg2.x = 600
}
spawnObstacles();
if(keyDown("space") && girl.y >= 159){
    girl.velocityY = -5;
   
}

   
girl.velocityY = girl.velocityY+0.8;
girl.collide(ground);
start.visible = false;
girl.visible = true;
         
         bg2.visible = true;
}
drawSprites();

}

function spawnObstacles() {
    if(frameCount % 90 === 0) {
      var obstacle = createSprite(600,285,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -5;
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                break;
        case 6: obstacle.addImage(obstacle6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.1;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
//