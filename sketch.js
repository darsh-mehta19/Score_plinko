var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState;
var line;
var divisionHeight=300;
var score ;
var particle;
var turn;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  gameState="start"
  ground = new Ground(width/2,height,width,20);
  score=0;
  turn=0;
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);

  if(particle!=null)
  {
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<300){
        score =  score+500;
        particle = null
        if(turn>=5){
          gameState="end";
          text("Game Over",400,300);
        }
      }

    }
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for(var k=0;k < 900;){

   }
   text("Score:-"+score,20,30)
   mousePressed();
 
   }

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);

  }
}






















