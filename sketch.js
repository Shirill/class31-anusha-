/*// Datatypes

//string
var str= "my name is Shiril"
console.log(str);

//number
var num=100;
console.log(num);

//boolean
var bool= false;
console.log(bool);

//object
var obj;    //undefined object
console.log(obj);

// reasssign the same undefined object to null
//null
obj=null;
console.log(obj); 

//array is like is container having items in it of different datatypes

//an array holding the same datatype
var arr1= [1,2,3,4];    //(0,1,2,3) =indexes
console.log(arr1);

//array is holding different datatypes
var name1="manan";
var student1=[name1,11,true]    //(0,1,2)
console.log(student1);

console.log(student1.length); //3
console.log(student1[0]);  // "manan"

//array storing list of array

var arr2=[[1,2,3],[57,6],[7,8]]      // 2 = [7,8]   (0,1)
console.log(arr2);
console.log(arr2[2]); // [7,8]

console.log(arr2[2][0]);  //7

console.log(arr2[2][1]);  //8

console.log(arr2[0]);  //[1,2,3]

console.log(arr2[0][2]);  // 3  // access the 3rd element of 1st array

console.log(arr2[1][0]);  //57  // access the 1st element of 2nd array

arr2.push("my name");
console.log(arr2);    // value is aaded at the last

arr2.pop();
console.log(arr2);   // value is deleted from the last 


var arr3=[];
console.log(arr3);
console.log(arr3.length);
*/

//DATATYPES   
// 2 SPECIAL TYPE OF DATATYPE
// null: it means  nothing or empty, undefined: it has no value

//string
var name= " my name is Shiril"
console.log(name);

//number
var num=100;
console.log(num);

//Boolean  two values true and false            if(condition===true)
var bool= true;
console.log(bool);

//undefined
var obj;
console.log(obj);

//Null
obj= null;
console.log(obj);

// Array 
  //  index: 0 ,1, 2,3, 4        
var arr1=[34,52,24,65,85]
console.log(arr1);


//arr1[0]=34
console.log(arr1[2]);

var arr2=["Anusha",12,true] ;
console.log(arr2.length);


var arr3= ["Shiril",13,true];
//index:        0                  1
var arr4=[["Anusha",12,true],["Shiril",13,true]];

console.log(arr4);
//console.log(arr4[0]);   

//console.log(arr4[0][1]);   

//console.log(arr4[1][2]);


arr4.push("myname");
console.log(arr4);

arr4.pop();
console.log(arr4);

arr4.pop();
console.log(arr4);


//arr5= [[x1,y2],[x2,y2],[x3,y3]]


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}