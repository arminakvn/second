var y = 200;
var d = 460;
var n_rows;
var n_cols;
var ww;
var hh;
var ang;
var smal_rect_width;
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
	colorMode(HSB,360,100,100,100)
	RECT_NUM = 10;
	ROTATION = (PI / 2) / (RECT_NUM - 1);
	ROTATION_STEP = 2 * PI / 8000;
	STEP_COUNT = 0;
	START_POINT = [200, 200]
	ww = windowWidth - START_POINT[0];
	hh = windowHeight - START_POINT[1];
	cnv = createCanvas(windowWidth,windowHeight).parent("canvas-container")
	centerCanvas()
	background(4,59,94,100);
	RECT_WIDTH = min(ww, hh) / (2 * RECT_NUM - 1);

}

function draw() {
	background(4,59,94,100);
	noStroke();
	rectMode(CENTER);
	translate(ww/3.3,50)
	push()
	// translate(START_POINT[0], START_POINT[1])
	for(let i = 0 ; i < RECT_NUM ; i++) {
		for(let j = 0 ; j < RECT_NUM ; j++) {
			push();
			let x = ((2*i+1) * RECT_WIDTH) - (RECT_WIDTH/2);
			let y = ((2*j+1) * RECT_WIDTH) - (RECT_WIDTH/2);
			translate(x, y);
			rotate(ROTATION*i + ROTATION*j + ROTATION_STEP * STEP_COUNT);
			fill(0, 0, 100);
			rect(0, 0, RECT_WIDTH, RECT_WIDTH);
			pop();
		}
	}
	pop()
	STEP_COUNT = STEP_COUNT >= 8000 ? 0 : STEP_COUNT +1;
  }
