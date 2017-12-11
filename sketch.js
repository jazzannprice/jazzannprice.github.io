//Jasmine Price - 405 - Creative Coding Project

//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 7;

function setup(){
  //Use this function to define the size of the output window
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  //Array loop that creates the circles
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(random(0, 594), 0, 0.02, random(0.02, 0.09), random(10, 90), random(2, 6));
  }
}

function draw(){
  //If the mouse is held down, the fade will create a longer trail, when it is released the trail will shorten
  if (mouseIsPressed){
    fill(0, 1);
  } else{
    fill(0, 10);
  }
  //The background
  rect(0, 0, width, height);
  //Array for object functions
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

//Definition of the class Circle
class Circle{
    constructor(x, y, angleX, freq, size, speed){
      //Setup of class variables
      //X is the x axis position, y is the y axis position, angleX and freq adjust the speed of the wave, size is the size of the each ellipse and speed is the speed at which each circle falls
      this.x = x;
      this.y = y;
      this.angleX = angleX;
      this.freq = freq;
      this.size = size;
      this.speed = speed;
      //Setup of rgb colours
      this.rd = random(255);
      this.grn = random(255);
      this.bl = random(255);
      this.a = 255;
    }

//The function that controls the motion of the circle
moveFunction(){
  this.y = this.y + this.speed; //Add a random number pixel to the position of y (for every frame) as the falling speed
  //If the position of the ellipse reaches the limit of the canvas, it then resets its position to 0 - ellipse appears from the top again
  this.angleX+=this.freq; //Speed of the wave
  this.sinValue = sin(this.angleX); //Using the sin
  this.mapSin = map(this.sinValue, -1, 1, -50, 50); //Amplitude

  if (this.y > 866){ //866 comes from 841 (height) + 25 (half size of ellipse)
    this.rd = random (255); //Colours will change
    this.grn = random (255); //Colours will change
    this.bl = random (255); //Colours will change
    this.a = 255;
    this.size = (random(10, 50)); //Size will change
    this.x = random(0, 594); //Starting point in the x axis will change
    this.y = -25; //Instead reset to 0, we reset to 0-25 (half size of ellipse)
  }
  //console.log(x+mapSin);
}

//The class function that displays the ellipse and applies the colours
displayCircle(){
  noStroke();
  this.fillcol = color(this.rd, this.grn, this.bl, this.a)
  fill(this.fillcol);
  ellipse(this.x+this.mapSin, this.y, this.size, this.size);
  }
}
