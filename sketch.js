//Create variables here
var dog,happyDog,foodS,foodStock;
var hungryDog,happyDog;


function preload()
{
  //load images here
  hungryDog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage("dog",hungryDog);
  dog.scale=0.2;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dog",happyDog);
}
  drawSprites();
  fill (255,255,254)
  stroke("black");
  text("Food remaining : "+foodS,170,370);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}
  //add styles here






