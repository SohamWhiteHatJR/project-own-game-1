const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var score=0;
var engine, world;
var punchImg , punchPC;
var PC , pcImg;
var ground;
var  sword , swordAttackImg; 
var cloudImage;
var boss , bossImg;
var robot , robotImage , robotGrp;
var bullet , bulletGrp;
var gameState = "level1";
var combo , comboImg;
var bosskill = 100;
var finalboss ,finalbossImg;

function preload(){

pcImg = loadAnimation("images/stickman walk-0.png",
"images/stickman walk-2.png","images/stickman walk-3.png",
"images/stickman walk-4.png","images/stickman walk-7.png",
"images/stickman walk-8.png","images/stickman walk-9.png","images/stickman walk-10.png");

cloudImage = loadImage("images/cloud.png")

bossImg = loadAnimation("images/boss-0.png","images/boss-1.png","images/boss-2.png","images/boss-3.png",
"images/boss-4.png","images/boss-5.png","images/boss-6.png","images/boss-10.png","images/boss-11.png",
"images/boss-12.png","images/boss-13.png","images/boss-14.png","images/boss-16.png","images/boss-22.png",
"images/boss-23.png","images/boss-24.png","images/boss-25.png","images/boss-27.png","images/boss-28.png",
"images/boss-32.png","images/boss-33.png","images/boss-34.png","images/boss-36.png");

swordAttackImg = loadAnimation("images/s1.png")
// ,"images/s2.png","images/s3.png",
// "images/s4.png","images/s5.png","images/s6.png","images/s7.png","images/s8.png","images/s9.png",
// "images/s10.png","images/s11.png","images/s12.png","images/s13.png","images/s14.png","images/s15.png");

punchImg = loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png",
"images/p5.png","images/p6.png",);

robotImage = loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png",
"images/r5.png","images/r6.png");

comboImg = loadAnimation("images/combo1-0.png","images/combo1-1.png","images/combo1-2.png",
"images/combo1-3.png","images/combo1-4.png","images/combo1-5.png",
"images/combo1-6.png","images/combo1-7.png","images/combo1-8.png",
"images/combo1-9.png","images/combo1-10.png","images/combo1-11.png",
"images/combo1-12.png","images/combo1-13.png","images/combo1-14.png",
"images/combo1-15.png","images/combo1-16.png","images/combo1-17.png",
"images/combo1-18.png","images/combo1-19.png","images/combo1-20.png",
"images/combo1-21.png","images/combo1-22.png","images/combo1-23.png",
"images/combo1-24.png","images/combo1-25.png","images/combo1-26.png",
"images/combo1-27.png","images/combo1-28.png","images/combo1-29.png",
"images/combo1-30.png","images/combo1-31.png","images/combo1-32.png",
"images/combo1-33.png","images/combo1-34.png","images/combo1-35.png",
"images/combo1-36.png","images/combo1-37.png","images/combo1-38.png",
"images/combo1-39.png","images/combo1-40.png","images/combo1-41.png",
"images/combo1-42.png","images/combo1-43.png","images/combo1-45.png",
"images/combo1-46.png","images/combo1-47.png","images/combo1-48.png",
"images/combo1-49.png","images/combo1-50.png","images/combo1-51.png",
"images/combo1-52.png","images/combo1-53.png","images/combo1-54.png",
"images/combo1-55.png","images/combo1-56.png","images/combo1-57.png",
"images/combo1-58.png","images/combo1-59.png","images/combo1-60.png",
"images/combo1-61.png","images/combo1-62.png","images/combo1-63.png",
"images/combo1-64.png","images/combo1-65.png","images/combo1-66.png",
"images/combo1-67.png","images/combo1-68.png","images/combo1-69.png",
"images/combo1-70.png","images/combo1-71.png","images/combo1-72.png",
"images/combo1-73.png","images/combo1-74.png","images/combo1-75.png",
"images/combo1-76.png","images/combo1-77.png","images/combo1-78.png",
"images/combo1-79.png","images/combo1-80.png","images/combo1-81.png",
"images/combo1-82.png","images/combo1-83.png","images/combo1-84.png",
"images/combo1-85.png","images/combo1-86.png","images/combo1-87.png",
"images/combo1-89.png","images/combo1-90.png","images/combo1-91.png",
"images/combo1-92.png","images/combo1-93.png","images/combo1-94.png",
"images/combo1-95.png","images/combo1-96.png","images/combo1-97.png",
"images/combo1-98.png","images/combo1-99.png","images/combo1-100.png",
"images/combo1-101.png","images/combo1-102.png","images/combo1-103.png",
"images/combo1-104.png","images/combo1-105.png");

finalbossImg = loadImage("images/final boss.png");
}

function setup(){

    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = createSprite(0,480,2000,7);
    ground.shapeColor = "black"
    ground.x = ground.width/2;

    PC = createSprite(100,400);
    PC.addAnimation("moving",pcImg);
   
    robotGrp = new Group();
    bulletGrp = new Group();

    score = 0;
    bosskill = 100;
}

function draw(){
    background(255,255,255);
    console.log(gameState);

    textSize(20);
    fill(0)
    text("Score: "+ score, 500,50);
    
    Engine.update(engine);

    if(gameState === "level1"){

    text("Press 'Q' for shooting",500,100);
    text("kill atleast 10 enemies for boss level",500,120);
    ground.velocityX = -2;

    if (ground.x < 200){
        ground.x = ground.width/2;
    }

    SwordAttack123();
    spawnClouds();
    punch();
    obstacles();
    hit();

    if(score===1){
    gameState === "level2"
    }
}

if(gameState === "level2"){
    boss();
    text("Level 2 Boss Incomming",500,100);
    }

    if(gameState === "level3"){
        text("FINAL BOSS INCOMING",500,100);
        finalboss = createSprite(400,400,10,10);
        finalboss.addImage("boss",finalbossImg);
    }
    drawSprites();
  //  console.log(frameCount)
}

function Boss(){

boss = createSprite(700,275)
boss.addAnimation("boss",bossImg);

if(bulletGrp.isTouching(boss)){
    bulletGrp.destroyEach();
    bosskill = bosskill - 20;
  }

  if(bosskill <=0){
      gameState = "level2"
  }
}

function SwordAttack123(){
    if(keyWentDown("q")){
        PC.visible = false;;
        sword = createSprite(200,375);
        sword.addAnimation("attack",swordAttackImg)
        sword.scale = 0.5

        bullet = createSprite(300,310,10,5);
        bullet.shapeColor = "gold"
        bullet.velocityX = 2;
        bullet.lifetime = 275;
        bulletGrp.add(bullet);

        console.log("abcd")
        if(keyWentUp("q")){
            bullet.velocityX = 0
        }
       
    }
}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(1200,120,40,10);
       cloud.y = Math.round(random(80,150));
        cloud.addImage(cloudImage);
         cloud.scale = 1;
          cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
   
    }
}

function punch(){
    if (keyDown(LEFT_ARROW)){
        PC.visible = false;
        punchPC = createSprite(200,253);
        punchPC.addAnimation("punch",punchImg)
        console.log("abcd")
    }
}

function obstacles() {
   
    if (frameCount % 100 === 0) {
      var robot = createSprite(1200,350);
       robot.addAnimation("robots",robotImage);
        robot.scale = 0.5;
        robot.velocityX = -3;
        robot.lifetime = 500;
        robotGrp.add(robot);
    }
  }

  function hit(){
          for(var i = 0; i<bulletGrp.length; i++){
              if(bulletGrp.get(i).isTouching(robotGrp)){
                robotGrp.get(i).destroy();
                bulletGrp.get(i).destroy();
                score=score+1;
              }
          } 
      }
