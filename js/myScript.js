// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);

function onKeyDown(event) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	new Path.Circle(point, 10).fillColor = 'yellow';
}
