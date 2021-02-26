var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)
image(starImg,starBody.position.x,starBody.position.y,100,100)
  
  if (starBody.position.y > 470){
Matter.Body.setStatic(starBody,true)
fairy.velocityX= 0;

  }
  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyCode === LEFT_ARROW){
		fairy.velocityX = -5;
		
		
	  }
	  if (keyCode === RIGHT_ARROW){
		fairy.velocityX = 5;
		
	  }
	  if (keyCode === 32){
		Matter.Body.setStatic(starBody,false)
		
	  }
	
	  
	
	
}
