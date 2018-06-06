var x = -130;
var y = 30;

var xspeed = 6;
var yspeed = 2;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	background(215, 235, 255);

	x += xspeed;
	y += yspeed;

	for (i=0; i<5; i++) {
		var xx = x + i * 200;
		var yy = y + i * 200/3
		triangle(xx+35,yy+10, xx+25, yy+20, xx+120,yy+70)
		triangle(xx+25,yy+20, xx+25,yy+35, xx+120,yy+70)
		triangle(xx+20,yy+60, xx+20,yy+70, xx+120,yy+70)
		triangle(xx+20,yy+30, xx+0,yy+60, xx+120,yy+70)
	}
	
	if (x > 70) {
		x -= 200;
		y -= 200/3;
	}
}