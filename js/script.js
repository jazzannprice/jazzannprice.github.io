// Jasmine Price DAT404 JavaScript


// Header fading slideshow controls and images
  $(function() {
    $(".rslides").responsiveSlides();
  });


// Creating the sticky navbar effect
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var slidesHeight = $('.rslides').height();


// Add the sticky class to the navbar when you reach its position. Then remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= slidesHeight) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Scroll Reveal
window.sr = ScrollReveal({ reset: true }); // Reset each time
// window.sr = ScrollReveal(); // No reset
// Scroll eveal settings
sr.reveal('.foo-4', {
  viewFactor: 0.5
});


// The code to add the moving background animation
// Console Log easter egg instructions
console.log('Welcome! Hold down the Q key for some wavey lines on the main background!');
//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 8;

function setup(){
  //Use this function to define the size of the output window
  var canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent('backgroundAnimation');
  //Array loop that creates the circles
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(random(0, innerWidth), 0, 0.02, random(0.02, 0.09), random(10, 90), random(2, 6));
  }
}

function draw(){
  //If the key 'q' is held down, the fade will create a longer trail, when it is released the trail will shorten
  if (key === 'q'){
    fill(255, 1);
  } else{
    fill(255, 50);
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

  if (this.y > innerHeight){ //866 comes from 841 (height) + 25 (half size of ellipse)
    this.rd = random (255); //Colours will change
    this.grn = random (255); //Colours will change
    this.bl = random (255); //Colours will change
    this.a = 255;
    this.size = (random(10, 40)); //Size will change
    this.x = random(0, innerWidth); //Starting point in the x axis will change
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



// Function to update the current year in the footer
window.onload = function() {
  currentYear();
  sliderReSize();
};

$(window).resize(function(){
  sliderReSize();
});

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

function sliderReSize(){
  var slidesHeight2 = $('.rslides').height();
  $("#header").height(slidesHeight2);
}
