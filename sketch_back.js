var y = 200;
var d = 460;
var n_rows;
var n_cols;
var ww;
var hh;
var ang;
var smal_rect_width;

function setup() {
	colorMode(HSB,360,100,100,100)
	ww = windowWidth -10;
	hh = windowHeight -5;
  	createCanvas(ww,hh);
  	background(4,59,94,100);
	smal_rect_width = ((width/3)/18);
	print(smal_rect_width)
	n_rows = (hh / smal_rect_width) ;
	n_cols = (ww / smal_rect_width);

}

function draw() {
	noStroke()
	
	// translate(0,5);
	
  	var ze_x =( ww/4);
  	var ze_y = 30;
	//   push();
	ang = PI;
  	for (var row=0; row < n_rows; row=row+2){
		ang = ang + ((1/(n_rows)) * PI)
  		for (var col=0; col < n_cols-1; col=col+2) {
			ang = ang + (((ww/3)/18) * PI)
			var x = ze_x + (row * smal_rect_width);
			var y = ze_y + (col * smal_rect_width);
			push();
			translate(x,y)
			  rotate( ang)
			  noStroke();
			  rectMode(CENTER)
			rect( 0, 0, smal_rect_width, smal_rect_width ) 
			pop();
			// if ( ((row % 2 == 0) || (col % 2 == 0)) && ((row % 2 != 0) || (col % 2 != 0))) {
			// 	// print(row, col)
			// 	fill(88,11,68,100)
				
			// 	beginShape();
			// 	vertex(x, y);
			// 	vertex(x + smal_rect_width - 5, y+5);
			// 	vertex(x + smal_rect_width, y + smal_rect_width);
			// 	vertex(x + 5, y + smal_rect_width -5);
			// 	endShape(CLOSE);
				 	
  			
			// } else {
					

			// 		fill(0,0,100,100)
			// 	  	beginShape();
			// 		vertex(x + 10, y + 10);
			// 		vertex(x + smal_rect_width, y);
			// 		vertex(x + smal_rect_width - 10, y + smal_rect_width - 10);
			// 		vertex(x, y + smal_rect_width);
			// 		endShape(CLOSE);
			// }
			
			
  			// push();
  				
			//   translate(x+50,y+50)
			//   rotate( (row/col)* PI)
			//   noStroke();
  			// 	rect( 0, 0, smal_rect_width, smal_rect_width )  	

  			// pop();
  			
		  }
  				
			 
  	}
	  // pop();
	  push();
	//   background(4,59,94,100);
	// rect(0,0, width , hh*.1)
	pop();
	// rect(0,0, (ww/3)-40 , hh)
	// rect((2*ww/3)+36,0, (ww/3)+49, hh)
	// rect(0,hh - 10, width , hh)
  
  }