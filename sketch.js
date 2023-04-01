let gx;
let gy;
let sx;
let sy;
let lx;
let ly;

let overGlass = false;
let lockedg = false;
let overShort = false;
let lockeds = false;
let overLong = false;
let lockedl = false;

let gxOffset = 0.0;
let gyOffset = 0.0;
let sxOffset = 0.0;
let syOffset = 0.0;
let lxOffset = 0.0;
let lyOffset = 0.0;

function setup() {
 let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  gx = 0;
  gy = 0;
  sx = 0;
  sy = 0;
  lx = 0;
  ly = 0;
  bg = loadImage('bg.png');
  glass = loadImage('glass.png');
  long = loadImage('long.png');
  short = loadImage('short.png');
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  password = input.value(); 
   if (password == "0703") {
      greeting.html('Congratulations! Puzzle #618 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
    input.value('');
 }  
}

function draw() {
  background(bg);
 
if (
    mouseX > gx + 190 &&
    mouseX < gx + 430 &&
    mouseY > gy + 206 &&
    mouseY < gy + 320
  ) {overGlass = true;
    if (!lockedg) {}
  } else {
    overGlass = false;
  }
  
if (
    mouseX > sx + 330 &&
    mouseX < sx + 360 &&
    mouseY > sy + 225 &&
    mouseY < sy + 255
  ) {
    overShort = true;
    if (!lockeds) {}
  } else {
    overShort = false;
  }
  
if (
    mouseX > lx + 215 &&
    mouseX < lx + 245 &&
    mouseY > ly + 225 &&
    mouseY < ly + 295
  ) {
    overLong = true;
    if (!lockedl) {}
  } else {
    overLong = false;
  }
  
  image(short, sx, sy,600,600); 
  image(long, lx, ly,600,600); 

  image(glass, gx, gy,600,600); 

 }

function mousePressed() {
  if (overGlass) {
    lockedg = true;
  } else {
    lockedg = false;
  }
  gxOffset = mouseX - gx;
  gyOffset = mouseY - gy;
  
  if (overShort) {
    lockeds = true;
  } else {
    lockeds = false;
  }
  sxOffset = mouseX - sx;
  syOffset = mouseY - sy;

  if (overLong) {
    lockedl = true;
  } else {
    lockedl = false;
  }
  lxOffset = mouseX - lx;
  lyOffset = mouseY - ly;
  
}

function mouseDragged() {
  if (lockedg) {
    gx = mouseX - gxOffset;
    gy = mouseY - gyOffset;
  }
  
  if (lockeds) {
    sx = mouseX - sxOffset;
    sy = mouseY - syOffset;
  }
  
  if (lockedl) {
    lx = mouseX - lxOffset;
    ly = mouseY - lyOffset;
  }
}

function mouseReleased() {
  lockedg = false;
  lockeds = false;
  lockedl = false
}
