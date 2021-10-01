const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var playerArcher;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

 // angleMode(DEGREES);
  angle = 2

  playerBase = new PlayerBase(300, (450, height-300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
 

  //Create Player Archer Object

  playerArcher = new PlayerArcher(player.body.position.x+ 45,player.body.position.y - 20,120,120);

  computerBase = new ComputerBase(
    width - 300, (450,height-300),180, 150 );
  computer = new Computer(width - 280, computerBase.body.position.y - 153,  50, 180 );
  computerArcher = new ComputerArcher(computer.body.position.x- 50,computerBase.body.position.y - 180, 120, 120 );
  
  //Create an arrow Object
  
  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100,10)
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
 computerArcher.display()

 arrow.display()



 


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
  arrow.shoot(playerArcher.body.angle)

  }
}



