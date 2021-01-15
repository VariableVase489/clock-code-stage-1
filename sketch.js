var sc, mn, hr, scAngle;


function setup() {
  createCanvas(1425,775);
  sc = second();
  mn = minute();
  hr = hour();
}

function draw() {
  background(25,255,255);  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(scAngle.x,scAngle.y,712.5,387.5);

  angleMode(DEGREES);
  mnAngle = map(mn,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(7);
  line(712.5,200,712.5,387.5);

  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
  stroke(0,0,255);
  strokeWeight(7);
  line(712.5,200,712.5,387.5);

  drawSprites();
}