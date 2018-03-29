
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}


function setup() {
	cnv = createCanvas(windowWidth, windowHeight).parent("canvas-container")
  SHADING_STEP = 18;
  MAX_RADIUS = min(windowWidth, windowHeight) / 2;
  BASE_COLOR = 180;
	centerCanvas();
}

function draw() {
  background(BASE_COLOR - SHADING_STEP * 3, BASE_COLOR - SHADING_STEP * 3, BASE_COLOR - SHADING_STEP * 3);
  noStroke()
  for(let i = 0 ; ; i++) {
    rect()
    let circle_color = BASE_COLOR  + SHADING_STEP * i;
    fill(circle_color, circle_color, circle_color);
    ellipse(windowWidth/2, windowHeight/2, (MAX_RADIUS * 2) - (i*150), (MAX_RADIUS * 2) - (i*150));
    if (circle_color >= 255) {
      break;
    }
  }
  let x = 70;
  let y = 20;
  for (let i = 0 ; i < 20 ; i++) {
    fill(40,40,40)
    rect(0 , i*x + i*y, windowWidth, x)
  }
}
