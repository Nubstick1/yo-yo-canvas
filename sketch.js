var canvas;
var bg;

var name;
var userCount;

var form, paint, user;
var database;

var toolbox;


var paintState=0;

function preload(){
bg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1900,1090);
    database = firebase.database();
  paint = new Paint();
  paint.getState();
  paint.start();

  
}

function draw(){
    background(bg);
    
    
  }


  function mouseDragged(){
    strokeWeight(10);
     point(mouseX, mouseY);

  }
