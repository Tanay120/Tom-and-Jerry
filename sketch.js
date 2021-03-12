var mouse;
var mouseImage;
var mouseImage2;
var mouseAnimation;
var cat;
var catImage;
var catImage2;
var catAnimation;
var garden;
var gardenImage;
  
function preload() {
  //load the images here
  catImage= loadImage(images/cat1.png);
  catAnimation= loadAnimation(images/cat2.png,images/cat3.png);
  catImage2= loadImage(images/cat4.png);

  mouseImage= loadImage(images/mouse1.png);
  mouseAnimation= loadAnimation(images/mouse2.png,images/mouse3.png);
  mouseImage2= loadImage(images/mouse4.png);

  gardenImage= loadImage(images/garden.png)
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse= createSprite(900,100,10,10);
    mouse= addImage("Mouse Image",mouseImage);

    cat= createSprite(900,700,10,10);
    cat= addImage("Cat Image",catImage);
  
    garden= createSprite(0,0,1000,800);
    garden= addImage("Garden",gardenImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(isTouching(cat,mouse)){
        cat.loadImage("catStoped",catImage2);
        cat.changeImage("catStopped");

        mouse.loadImage("mouseStoped",mouseImage2);
        mouse.changeImage("mouseStopped");
      }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keydown(LEFT_ARROW)){
       cat.addAnimation("catRunning",catAnimation);
       cat.changeAnimation("catRunning");

       mouse.addAnimation("mouseRunning",mouseAnimation);
       mouse.changeAnimation("mouseRunning");

       cat.velocityX=-5;
   }

}
