const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof,string;
var bobDiameter;
var bobSound;

function preload(){

}

function setup(){
    var canvas = createCanvas(1920,1080);

    engine = Engine.create();
    world = engine.world;

    roof = new Roof();

    bobObject1 = new Bob(432,390);
    bobObject2 = new Bob(466,390);
    bobObject3 = new Bob(500,390);
    bobObject4 = new Bob(534,390);
    bobObject5 = new Bob(568,390);
    bobDiameter = 34;

    string1 = new String(roof.body,bobObject1.body,-bobDiameter*2,0);
    string2 = new String(roof.body,bobObject2.body,-bobDiameter,0);
    string3 = new String(roof.body,bobObject3.body,0,0);
    string4 = new String(roof.body,bobObject4.body,bobDiameter,0);
    string5 = new String(roof.body,bobObject5.body,bobDiameter*2,0);

    bobSound = loadSound("bobSound1.mp3");
}

function draw(){
    background("red");

    Engine.update(engine); 

    roof.display();

    bobObject1.display(35);
    bobObject2.display(35);
    bobObject3.display(35);
    bobObject4.display(35);
    bobObject5.display(35);

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();

    if(keyDown("w")){
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:70,y:-70});
    }
    if(keyDown("s")){
        Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:70,y:-70});
    }
}