const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall1,wall2,wall3,wall4,div1,div2,div3,div4,div5,div6,div7,div8;

var g;

var score = 0;
var part;

var turn = 0;

var plinkos = [];
var particles = [];

function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;

   
    wall1 = new Wall(0,height/2,10,height,PI);
    wall2 = new Wall(width,height/2,10,height,PI)
    wall3 = new Wall(width/2,0,width,10,PI/2)
    wall4 = new Wall(width/2,height,width,10,PI/2)

    div1 = new Div(5,420,5,250,PI);
    div2 = new Div(70,420,5,250,PI);
    div3 = new Div(135,420,5,250,PI);
    div4 = new Div(200,420,5,250,PI);
    div5 = new Div(265,420,5,250,PI);
    div6 = new Div(330,420,5,250,PI);
    div7 = new Div(395,420,5,250,PI);
    div8 = new Div(width/2,494,width,5,PI);

   // g = new Ground(200,280,1000,10);
    


    for (var x = 40; x <= width-20; x=x+40) {

        plinkos.push(new Plinko(x,50));
    }
    for (let x = 20; x <= width-10; x=x+40) {
       
        plinkos.push(new Plinko(x,100));
    }
    for (var x = 40; x <= width-20; x=x+40) {

        plinkos.push(new Plinko(x,150));
    }
    for (let x = 20; x <= width-10; x=x+40) {
       
        plinkos.push(new Plinko(x,200));
    }
    for (var x = 40; x <= width-20; x=x+40) {

        plinkos.push(new Plinko(x,250));
    }
}



function draw(){

    background(0);

    Engine.update(engine);

    fill("green");
    text("score: "+score,30,30);

  
    a();

    text("50",30,300); 
    text("50",100,300); 
    text("50",160,300); 
    text("100",225,300); 
    text("100",290,300); 
    text("100",350,300); 
  
    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
    div6.display();
    div7.display();
    div8.display();

    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    
   // g.display();


    for (let num = 0; num < plinkos.length; num++) {
        
        plinkos[num].display();
    }
    for (let num = 0; num < particles.length; num++) {
        
        particles[num].display();
    }
    if(frameCount%100===0){

        particles.push(new Particle(random(width/2-20,width/2+20),10))
    }
}


a = function(){



    if(particles.x > 200 ){

        score = score +100;
        
   
       }
   else
   
   {
   
   score = score + 50;
   
   
   }

}


