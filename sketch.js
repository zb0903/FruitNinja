//Game States
var PLAY=1;
var END=0;
var gameState=1;

var tray, knife, apple, banana, custardapple, guava, mango, pear, pineapple, plum, strawberry, watermelon, fruit, green_splash, mustard_splash, red_splash, yellow_splash,gameOver;

var appleGroup, bananaGroup, pineappleGroup, custardappleGroup, guavaGroup, mangoGroup, pearGroup, plumGroup, strawberryGroup, watermelonGroup, red_splashGroup, mustardsplashGroup,greensplashGroup;

var trayImage, knifeImage, appleImage, bananaImage, custardappleImage, guavaImage, mangoImage, pearImage, pineappleImage, plumImage, strawberryImage, watermelonImage, green_splashImage, mustard_splashImage, red_splashImage, yellow_splashImage, bombImage, gameOverImage;


var sword_cutSound, explosionSound;

function preload(){  
  knifeImage = loadImage("knife.png");
  appleImage = loadImage("apple.png");
  bananaImage = loadImage("banana.png");
  custardappleImage = loadImage("custard apple.png");
  guavaImage = loadImage("guava.png");
  mangoImage = loadImage("mango.png");
  pearImage = loadImage("pear.png");
  pineappleImage = loadImage("pineapple.png");
  plumImage = loadImage ("plum.png");
  strawberryImage = loadImage("strawberry.png");
  watermelonImage = loadImage("watermelon.png")
  red_splashImage = loadImage("red_splash.png");
  yellow_splashImage = loadImage("yellow_splash.png")
  mustard_splashImage = loadImage("mustard_splash.png");
  green_splashImage = loadImage("green_splash.png");
  trayImage=loadImage("tray.jpg")
  bombImage = loadImage("bomb.png");
  explosionSound = loadSound("explosion.wav");
  sword_cutSound = loadSound("sword_cut.wav");
  gameOverImage = loadImage("game_over.png");
 
 
}


function setup() {
  createCanvas(550, 450);
 
  tray = createSprite(280,225);
  tray.addImage(trayImage);
  tray.scale = 5.5
 
   
  knife=createSprite(40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.55
   
  gameOver = createSprite(300,200,50,50);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 1
  gameOver.visible = false;
 
   appleGroup = createGroup();
   bananaGroup = createGroup();
   custardappleGroup = createGroup();
   guavaGroup = createGroup();
   mangoGroup = createGroup();
   pearGroup = createGroup();
   pineappleGroup = createGroup();
   plumGroup = createGroup();
   strawberryGroup = createGroup(); 
   watermelonGroup = createGroup();
   bombGroup = createGroup();
   redsplashGroup = createGroup();
   yellowsplashGroup = createGroup();
   greensplashGroup = createGroup();
   mustardsplashGroup = createGroup();
   
 
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  }

function draw() {
 
background("white")


 if(gameState===PLAY){
   
    knife.y=World.mouseY;
    knife.x=World.mouseX
   

   
    if(knife.isTouching(appleGroup)){
       appleGroup.destroyEach();
       redsplashGroup.setVisibleEach(true)
       redsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
 
    
    if(knife.isTouching(bananaGroup)){
       bananaGroup.destroyEach();
       yellowsplashGroup.setVisibleEach(true)
       yellowsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
 
   
    if(knife.isTouching(custardappleGroup)){
       custardappleGroup.destroyEach();
       greensplashGroup.setVisibleEach(true)
       greensplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
 
    if(knife.isTouching(guavaGroup)){
       guavaGroup.destroyEach();
       greensplashGroup.setVisibleEach(true)
       greensplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
 
    if(knife.isTouching(mangoGroup)){
       mangoGroup.destroyEach();
       yellowsplashGroup.setVisibleEach(true)
       yellowsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
    
   if(knife.isTouching(pearGroup)){
       pearGroup.destroyEach();
       greensplashGroup.setVisibleEach(true)
       greensplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
   
    if(knife.isTouching(pineappleGroup)){
       pineappleGroup.destroyEach();
       mustardsplashGroup.setVisibleEach(true)
       mustardsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
   
    if(knife.isTouching(plumGroup)){
       plumGroup.destroyEach();
       redsplashGroup.setVisibleEach(true)
       redsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
   
   if(knife.isTouching(watermelonGroup)){
       watermelonGroup.destroyEach();
       redsplashGroup.setVisibleEach(true)
       redsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
   
   if(knife.isTouching(strawberryGroup)){
       strawberryGroup.destroyEach();
       redsplashGroup.setVisibleEach(true)
       redsplashGroup.setLifetimeEach(5)
       score = score + 1;
       sword_cutSound.play();
    }
   
   
 
    if(knife.isTouching(bombGroup)){
        explosionSound.play();
        gameState = END;
    }
 
    var select_fruit = Math.round(random(1,11));
   
  if (World.frameCount % 40 == 0) {
    if (select_fruit == 1) {
        apple();
    } else if(select_fruit == 2){
       banana(); 
    } else if(select_fruit == 3){
       custardapple(); 
    } else if(select_fruit == 4){
       guava(); 
    } else if(select_fruit == 5){
       mango();
    } else if(select_fruit == 6){
       pear();
    } else if(select_fruit == 7){
       pineapple()
    } else if(select_fruit == 8){
       plum()
    } else if(select_fruit == 9){
       strawberry()
    } else if(select_fruit == 10){
       watermelon()
    }else {
       bomb();
   }
   
   
   

}
 
   if (gameState === END){
       bombGroup.destroyEach();
       gameOver.visible = true
   }
 }
     
 
 
  drawSprites();
 
  fill("black")
  textSize(25);
  text("Score : "+ score,200,50)
 
}      

function apple() {
   var apple = createSprite(Math.round(random(20, 370)),450,20,20);
   apple.addImage(appleImage);
   apple.velocityY = -6
   apple.lifetime = 150;
   apple.scale=0.5
   appleGroup.add(apple);
   var red_splash = createSprite(0,450,20,20);
   red_splash.addImage(red_splashImage)
   red_splash.x = apple.x;
   red_splash.velocityY=-6;
   red_splash.lifetime = 150;
   red_splash.scale = 0.3;
   red_splash.visible = false;
   redsplashGroup.add(red_splash)
   
}
 
function banana() {
   var banana = createSprite(Math.round(random(20, 370)),450,20,20);
   banana.addImage(bananaImage);
   banana.velocityY = -6
   banana.lifetime = 150;
   banana.scale=0.6
   bananaGroup.add(banana);
   var yellow_splash = createSprite(0,450,20,20);
   yellow_splash.addImage(yellow_splashImage)
   yellow_splash.x = banana.x;
   yellow_splash.velocityY=-6;
   yellow_splash.lifetime = 150;
   yellow_splash.scale = 0.35;
   yellow_splash.visible = false;
   yellowsplashGroup.add(yellow_splash)
   
}

function custardapple() {
   var custardapple = createSprite(Math.round(random(20, 370)),450,20,20);
   custardapple.addImage(custardappleImage);
   custardapple.velocityY = -6
   custardapple.lifetime = 150;
   custardapple.scale=0.3
   custardappleGroup.add(custardapple);
   var green_splash = createSprite(0,450,20,20);
   green_splash.addImage(green_splashImage)
   green_splash.x = custardapple.x;
   green_splash.velocityY=-6;
   green_splash.lifetime = 150;
   green_splash.scale = 0.9;
   green_splash.visible = false;
   greensplashGroup.add(green_splash)
   
}

function guava() {
   var guava = createSprite(Math.round(random(20, 370)),450,20,20);
   guava.addImage(guavaImage);
   guava.velocityY = -6
   guava.lifetime = 150;
   guava.scale=0.3
   guavaGroup.add(guava);
   var green_splash = createSprite(0,450,20,20);
   green_splash.addImage(green_splashImage)
   green_splash.x = guava.x;
   green_splash.velocityY=-6;
   green_splash.lifetime = 150;
   green_splash.scale = 0.9;
   green_splash.visible = false;
   greensplashGroup.add(green_splash)
   
}



function mango() {
   var mango = createSprite(Math.round(random(20, 370)),450,20,20);
   mango.addImage(mangoImage);
   mango.velocityY = -6
   mango.lifetime = 150;
   mango.scale=0.3
   mangoGroup.add(mango);
   var yellow_splash = createSprite(0,450,20,20);
   yellow_splash.addImage(yellow_splashImage)
   yellow_splash.x = mango.x;
   yellow_splash.velocityY=-6;
   yellow_splash.lifetime = 150;
   yellow_splash.scale = 0.35;
   yellow_splash.visible = false;
   yellowsplashGroup.add(yellow_splash)
   
}

function pear() {
   var pear = createSprite(Math.round(random(20, 370)),450,20,20);
   pear.addImage(pearImage);
   pear.velocityY = -6
   pear.lifetime = 150;
   pear.scale=0.2
   pearGroup.add(pear);
   var green_splash = createSprite(0,450,20,20);
   green_splash.addImage(green_splashImage)
   green_splash.x = pear.x;
   green_splash.velocityY=-6;
   green_splash.lifetime = 150;
   green_splash.scale = 0.9;
   green_splash.visible = false;
   greensplashGroup.add(green_splash)
   
}

function pineapple() {
   var pineapple = createSprite(Math.round(random(20, 370)),450,20,20);
   pineapple.addImage(pineappleImage);
   pineapple.velocityY = -6
   pineapple.lifetime = 150;
   pineapple.scale=0.6
   pineappleGroup.add(pineapple);
   var mustard_splash = createSprite(0,450,20,20);
   mustard_splash.addImage(mustard_splashImage)
   mustard_splash.x = pineapple.x;
   mustard_splash.velocityY=-6;
   mustard_splash.lifetime = 150;
   mustard_splash.scale = 0.3;
   mustard_splash.visible = false;
   mustardsplashGroup.add(mustard_splash)
   
}

function plum() {
   var plum = createSprite(Math.round(random(20, 370)),450,20,20);
   plum.addImage(plumImage);
   plum.velocityY = -6
   plum.lifetime = 150;
   plum.scale=0.25
   plumGroup.add(plum);
   var red_splash = createSprite(0,450,20,20);
   red_splash.addImage(red_splashImage)
   red_splash.x = plum.x;
   red_splash.velocityY=-6;
   red_splash.lifetime = 150;
   red_splash.scale = 0.3;
   red_splash.visible = false;
   redsplashGroup.add(red_splash)
   
}

function strawberry() {
   var strawberry = createSprite(Math.round(random(20, 370)),450,20,20);
   strawberry.addImage(strawberryImage);
   strawberry.velocityY = -6
   strawberry.lifetime = 150;
   strawberry.scale=0.2
   strawberryGroup.add(strawberry);
   var red_splash = createSprite(0,450,20,20);
   red_splash.addImage(red_splashImage)
   red_splash.x = strawberry.x;
   red_splash.velocityY=-6;
   red_splash.lifetime = 150;
   red_splash.scale = 0.3;
   red_splash.visible = false;
   redsplashGroup.add(red_splash)
   
}

function watermelon() {
   var watermelon = createSprite(Math.round(random(20, 370)),450,20,20);
   watermelon.addImage(watermelonImage);
   watermelon.velocityY = -6
   watermelon.lifetime = 150;
   watermelon.scale=0.25
   watermelonGroup.add(watermelon);
   var red_splash = createSprite(0,450,20,20);
   red_splash.addImage(red_splashImage)
   red_splash.x = watermelon.x;
   red_splash.velocityY=-6;
   red_splash.lifetime = 150;
   red_splash.scale = 0.3;
   red_splash.visible = false;
   redsplashGroup.add(red_splash)
   
}
function bomb () {
   var bomb = createSprite(Math.round(random(20, 370)),450,20,20);
   bomb.addImage(bombImage);
   bomb.velocityY = -6;
   bomb.lifetime = 150;
   bomb.scale=0.25
   bombGroup.add(bomb);
}
