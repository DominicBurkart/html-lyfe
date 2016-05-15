function windowResized() {
  createCanvas(window.innerWidth,window.innerHeight, WEBGL);
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight, WEBGL);
}


function draw() {
  var least = window.innerHeight;
  if (window.innerHeight < window.innerWidth) least = window.innerHeight;
  background(250);
  translate(0, 0, -least);
  push();
  box( least * 3/4 , least * 3/4, least * 3/4);
  pop();
}
