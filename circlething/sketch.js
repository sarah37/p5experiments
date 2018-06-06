var tau = 2 * Math.PI;

var angle = 0 // up to tau
var x = -50
var y = -50

var dst = 150; 

var globalIter = 0

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(211, 234, 233);

	globalIter += 1;
	if (globalIter > dst) {globalIter = 0;}

	angle = (globalIter * (tau / dst));
	x = globalIter - 50;
	y = globalIter - 50;

	for (var i = 0; i <= 4; i++) {
		for(var j = 0; j <= 4; j++) {
			var centreX = x + (i*dst);
			var centreY = y + (j*dst);

			var a = angle + centreX * 0.003 + centreY * .005
			
			noStroke()

			fill(195, 174, 232)
			ellipse(centreX,centreY, 30,30)
			
			fill(247, 168, 190)
			triangle(centreX,centreY, 
				centreX + Math.sin(a - tau/40) * 50, centreY + Math.cos(a - tau/40) * 50,
				centreX + Math.sin(a + tau/40) * 50, centreY + Math.cos(a + tau/40) * 50)
		}
	}
}