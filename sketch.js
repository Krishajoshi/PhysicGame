
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;
var stone1;
var elastic;

var bg = "bg.png";

function preload(){
	boy=loadImage("boy.png");
  getBackgroundImg();
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,140,30);
	mango2=new mango(1200,130,30)
	mango3=new mango(1220,230,30)
	mango4=new mango(960,230,30)
	mango5=new mango(860,200,30)
	mango6=new mango(960,100,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

    stone1 = new stone(220,340,30);

	var point_B={
        x:230,
        y:400,
    }    
    elastic= new elasticConstraint(stone1.body,point_B);

	
	Engine.run(engine);

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();

  elastic.display();


  groundObject.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
}


function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});



}

function mouseReleased(){
  elastic.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
 


	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

 
	if(distance<=lmango.r+lstone.r){
    
		Matter.Body.setStatic(lmango.body,false);
    
	}
 

}

function getBackgroundImg(){
  /* var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }*/
  bg = "bg.png";
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}