var balloon,balloonImage1,balloonImage2;
var balloondatabase, balloonPosition;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database = firebase.database;
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {

  balloon.velocityY = 0;
  balloon.velocityX = 0;

  background(bg);

  if(keyDown(UP_ARROW)) {
    balloon.velocityX = 0;
    balloon.velocityY = -2;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  
  if(keyDown(DOWN_ARROW)) {
    balloon.velocityX = 0;
    balloon.velocityY = 2;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  
  if(keyDown(LEFT_ARROW)) {
    balloon.velocityX = -2;
    balloon.velocityY = 0;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  
  if(keyDown(RIGHT_ARROW)) {
    balloon.velocityX = 2;
    balloon.velocityY = 0;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

 // var balloonPosition = database.ref('balloon/height');
 // balloonPosition.on("value",readPosition, showError);
}


function updateHeight(x,y){
 // database.ref('balloon/height').set
 ({
  'x': height.x + x ,
    'y': height.y + y 
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writting to the database");
}
