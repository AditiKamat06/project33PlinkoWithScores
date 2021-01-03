const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particle;
var engine, world, line;
var gameState= "start";

var plinkos = [];
var divisions=[];

var divisionHeight= 300;
var score = 0;
var count = 0;
var turn = 0;

function setup() {
    createCanvas(1600,800);
  
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(800,800,1600,20);
  
    line = createSprite(800,760,800,10);
    fill("yellow");
    
    for (var k=0; k<= width; k=k+200){
      divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    }
  
    for (var j = 40 ; j<=width; j=j+100){
      plinkos.push(new Plinko(j,75))
    }
  
    for (var j = 15; j<=width; j=j+100){
      plinkos.push(new Plinko(j,105))
    }
  
    for (var j = 40; j<=width; j=j+100){
      plinkos.push(new Plinko(j,145))
    }
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);

  if(gameState === "start"){
    mousePressed();
  }

  if(particle!="null"){
    particle.display();
      if(particle.position.y<=760){
        if(particle.body.position.x<=200){
          score = score+500;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=200 && particle.body.position.x<=400){
          score = score+500;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=400 && particle.body.position.x<=600){
          score = score+200;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=600 && particle.body.position.x<=800){
          score = score+200;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=800 && particle.body.position.x<=1000){
          score = score+100;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=1000 && particle.body.position.x<=1200){
          score = score+100;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=1200 && particle.body.position.x<=1400){
          score = score+50;
          particle = null;
          if(count>=5) gameState = "end";
        }

        if(particle.body.position.x>=1400 && particle.body.position.x<=1600){
          score = score+50;
          particle = null;
          if(count>=5) gameState = "end";
        }
      }
    drawSprites();
  }

  drawSprites();
  text("Score : " + score);

  textSize(50);
  text("500",100,600);
  text("500",300,600);
  text("200",500,600);
  text("200",700,600);
  text("100",900,600);
  text("100",1100,600);
  text("50",1300,600);
  text("50",1500,600);

  Engine.update(engine);
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}