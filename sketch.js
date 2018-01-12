//Jasmine Price - Creative Coding 405 Part 2

// Inialise global variables
var x = 0;
var amountdrawn = 0;
var amountlefttotest = 12;
var elt;

// Setup function to be executed once to set up the screen size and background colour etc
function setup() {
  var canvas = createCanvas(1280, 720);
  canvas.parent("myContainer");
  background(0, 0, 0);
  textAlign(CENTER);
  textSize(16);
  noLoop();
}

// Preloadagain function is called on buttonpressed and gets one set of pokemon data from the api for testing
function preloadagain (){
  let mapColor = color(255, 255, 255);
    // Randomly generate a number between 1 and 802 to append to URL so that we get a random pokemon each time
    let num = Math.floor(Math.random() * 801) + 1;
    // Put URL + random number into url variable to then use in loadJSON to get one lot of pokemon Data
    let url = "https://pokeapi.co/api/v2/pokemon/"+num;
    // callback function drawit with data from one pokemon
    loadJSON(url, drawit);
}

// Drawit function puts pokemon data on screen
function drawit(pokemonItem){
// Check if radio button selected equals the type of pokemon imported from api or if radio button selected was ALL
  if (elt == pokemonItem.types[0].type.name || elt == "All"){
    // If test is passed, then we want to display the data, so increment the variable amountdrawn by 1
    amountdrawn++;
    // Displaying 1st line of 6 pokemon on screen
      if (x<7){
      // Store the height of the pokemon
      heights = pokemonItem.height;
      // Store the type name of the pokemon
      type = pokemonItem.types[0].type.name;

      // Call function colourType to change the colour of the "circle" the pokemon data is presented in based on the pokemon type
      colourType();
      fill(mapColor);
      // Call pokemonHeight function to change height of the circle depending on pokemon height
      pokemonHeight();

      // Draw cirlce for pokemon
      ellipse(pos+107, 180, 213, circleheight);
      fill(0);

      // Display pokemon details in circle
      text("Pokemon: " + pokemonItem.name + "\n Id Number: " + pokemonItem.id + "\n Type: " + pokemonItem.types[0].type.name + "\nWeight: " + pokemonItem.weight + "\nHeight: " + pokemonItem.height + "\n Ability: " + pokemonItem.abilities[0].ability.name, pos, width/9.4, height/3.3);
      // Move the starting position of the next circle along by 213
      pos = x * 213;
      }

        // Second line of pokemon to display
        if (x>5){
        //store the height of the pokemon
        heights = pokemonItem.height;
        // store the type name of the pokemon
        type = pokemonItem.types[0].type.name;

        // Call function colourType to change the colour of the "circle" the pokemon data is presented in based on the pokemon type
        colourType();
        fill(mapColor);
        // Call pokemonHeight function to change height of the circle depending on pokemon height
        pokemonHeight();

        // Draw cirlce for pokemon
        ellipse(pos+107, 540, 213, circleheight);
        fill(0);

          // Display pokemon details in circle
          text("Pokemon: " + pokemonItem.name + "\n Id Number: " + pokemonItem.id + "\n Type: " + pokemonItem.types[0].type.name + "\nWeight: " + pokemonItem.weight + "\nHeight: " + pokemonItem.height + "\n Ability: " + pokemonItem.abilities[0].ability.name, pos, width/2.6, height/3.3);
          // Move the starting position of the next circle along by 213
          pos = y * 213;
          // Add 1 to number displayed on bottom line
          y++;
        }
        // Add 1 to number displayed
        x++;
        }
      // If amountdrawn has not reached the limit of 12, then get another random pokemon in preloadagain function and go through code again
      if (amountdrawn < 12){
        preloadagain();
      }
      // If amountdrawn has reached 12 (full page of Pokemon), blank out "loading...." text
    if (amountdrawn == 12){
      fill(0);
      rect(600, 340, 80, 30);
   }
}

// Function to change colour of pokemon circle depending on pokemon type
function colourType(){
  if (type.indexOf("normal") >= 0) { mapColor = color(169, 168, 120) }
  if (type.indexOf("fire") >= 0) { mapColor = color(240, 127, 47) }
  if (type.indexOf("water") >= 0) { mapColor = color(104, 144, 240) }
  if (type.indexOf("grass") >= 0) { mapColor = color(120, 200, 79) }
  if (type.indexOf("electric") >= 0) { mapColor = color(248, 208, 48) }
  if (type.indexOf("poison") >= 0) { mapColor = color(160, 64, 161) }
  if (type.indexOf("ice") >= 0) { mapColor = color(152, 216, 216) }
  if (type.indexOf("fighting") >= 0) { mapColor = color(192, 48, 40) }
  if (type.indexOf("ground") >= 0) { mapColor = color(224, 192, 105) }
  if (type.indexOf("flying") >= 0) { mapColor = color(168, 144, 240) }
  if (type.indexOf("rock") >= 0) { mapColor = color(183, 160, 56) }
  if (type.indexOf("dark") >= 0) { mapColor = color(111, 88, 72) }
  if (type.indexOf("psychic") >= 0) { mapColor = color(248, 88, 136) }
  if (type.indexOf("ghost") >= 0) { mapColor = color(112, 87, 152) }
  if (type.indexOf("steel") >= 0) { mapColor = color(184, 184, 208) }
  if (type.indexOf("bug") >= 0) { mapColor = color(168, 184, 33) }
  if (type.indexOf("dragon") >= 0) { mapColor = color(112, 56, 249) }
  if (type.indexOf("fairy") >= 0) { mapColor = color(255, 163, 177) }
}

// Function to change size (height) of circle depending on height of pokemon
function pokemonHeight(){
  if (heights <=4) {circleheight = 200}
  if (heights >4) {circleheight = 220}
  if (heights >6) {circleheight = 240}
  if (heights >8) {circleheight = 260}
  if (heights >10) {circleheight = 280}
  if (heights >12) {circleheight = 300}
  if (heights >14) {circleheight = 320}
  if (heights >16) {circleheight = 340}
  if (heights >18) {circleheight = 360}
}

// Function to do preloadagain (load a pokemon from api) when radio button is pressed
function buttonpressed() {
  // Start by clearing screen
  clear();
  background(0, 0, 0);
  textAlign(CENTER);
  textSize(16);
  fill(255);

  // Get the type of pokemon selected from the radio buttons and put into "elt" variable
  elt = document.getElementById("form1")["poketype"].value;
  // Initial counters
  x = 1;
  pos = 0;
  y = 0;
  amountdrawn = 0;

  // Call loadingText function to display "loading..." whilst screen is being filled with data
    loadingText();
    // Call preloadagain function to load a pokemon from api
    preloadagain();
  }

  // LoadingText function to display "loading..." whilst screen is being filled with data
function loadingText(){
  text('Loading...', width/2, height/2);
}
