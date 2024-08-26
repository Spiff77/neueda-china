// Graph object, represents a graph for one equation.    
var Graph = function (a, b, c, colour) {
    this.a = a;             // Coefficient of x squared.
    this.b = b;             // Coefficient of x.
    this.c = c;             // Coefficient of units.
    this.colour = colour;   // Colour to plot the graph.
    return this;
};

// General application state.
var state = {
	COLOURS: ['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'],
	CELL_SIZE: null,        // Will hold the size of a cell in the graph, in pixels.
	W: null,                // Will hold the width of the graph canvas, in pixels.  
	H: null,                // Will hold the height of the graph canvas, in pixels.  
    graphs: [],             // Collection of Graph objects.
    legendContext: null,    // 2d context for the legend context.
    graphContext: null      // 2d context for the graph context.
};

// Register event listeners.
window.addEventListener("load", onLoad);
document.getElementById("addButton").addEventListener("click", onAdd);

// Page-load function.
function onLoad() {

    state.legendContext = document.getElementById('legendCanvas').getContext('2d');
    state.graphContext  = document.getElementById('graphCanvas').getContext('2d');

    state.W = state.graphContext.canvas.width;
    state.H = state.graphContext.canvas.height;
    state.CELL_SIZE = state.W / 22;   // The graph grid is 22 x 22 cells.

    initLegendCanvas();
    initGraphCanvas();
}


// Initialize the legend canvas.
function initLegendCanvas() {
    state.legendContext.clearRect(0, 0, state.legendContext.canvas.width, state.legendContext.canvas.height);
    drawHeaderText(state.legendContext, 'Legend');
}


// Initialize the graph canvas.
function initGraphCanvas() {
    state.graphContext.clearRect(0, 0, state.W, state.H);
    drawHeaderText(state.graphContext, 'Graphs');

    drawGrid();
    drawAxes();
    drawLabels();
}


// Draw the light-blue grid on the graph canvas.
function drawGrid() {

    state.graphContext.save();

    state.graphContext.strokeStyle = 'lightblue';
    state.graphContext.lineWidth = 0.5;

    // Draw vertical lines for the grid.
    for (var x = -11; x <= 11; x++) {
        state.graphContext.beginPath();
        state.graphContext.moveTo(xCoord(x), 0);
        state.graphContext.lineTo(xCoord(x), state.H);
        state.graphContext.stroke();
    }

    // Draw horizontal lines for the grid.
    for (var y = -11; y <= 11; y++) {
        state.graphContext.beginPath();
        state.graphContext.moveTo(0, yCoord(y));
        state.graphContext.lineTo(state.W, yCoord(y));
        state.graphContext.stroke();
    }

    state.graphContext.restore();
}


// Draw the dark-blue axes on the graph canvas.
function drawAxes() {

    state.graphContext.save();

    state.graphContext.strokeStyle = 'darkblue';
    state.graphContext.fillStyle   = 'darkblue';
    state.graphContext.lineWidth = 2;

    // Draw the horizontal x axis.
    state.graphContext.beginPath();
    state.graphContext.moveTo(0, state.H/2);
    state.graphContext.lineTo(state.W, state.H/2);
    state.graphContext.stroke();

    // Draw the vertical y axis.
    state.graphContext.beginPath();
    state.graphContext.moveTo(state.W/2, 0);
    state.graphContext.lineTo(state.W/2, state.H);
    state.graphContext.stroke();

    // Draw a small triangular arrowhead at the end of the x axis.
    state.graphContext.beginPath();
    state.graphContext.moveTo(state.W - 10, state.H/2 - 10);
    state.graphContext.lineTo(state.W - 10, state.H/2 + 10);
    state.graphContext.lineTo(state.W,      state.H/2);
    state.graphContext.fill();

    // Draw a small triangular arrowhead at the end of the y axis.
    state.graphContext.beginPath();
    state.graphContext.moveTo(state.W/2 - 10, 10);
    state.graphContext.lineTo(state.W/2 + 10, 10);
    state.graphContext.lineTo(state.W/2,      0);
    state.graphContext.fill();

    state.graphContext.restore();
}


// Click-handler for the "Add" button on the form. 
function onAdd() {

    // Get the coefficients for x squared, x, and units.
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Invalid coefficient(s)");
    }
    else {
        // Create a new Graph object and add it to the collection of graphs.
        var graph = new Graph(a, b, c, state.COLOURS[state.graphs.length % state.COLOURS.length]);
        state.graphs.push(graph);

        // Draw the curve in the graph canvas, and the equation text in the legend canvas.
        drawGraphCurve(graph);
        drawGraphEquation(graph);
    }
}


// Draw a graph curve on the graph canvas.
function drawGraphCurve(graph) {

    state.graphContext.save();

    state.graphContext.strokeStyle = graph.colour;
    state.graphContext.lineWidth = 2;

    // Calculate the x, y values for the first point.
    var x = -11;
    var y = (graph.a * x * x) + (graph.b * x) + (graph.c);

    // Move to the first point.
    state.graphContext.beginPath();
    state.graphContext.moveTo(xCoord(x), yCoord(y));

    // Plot the graph by drawing a series of very small joined-up lines.
    for (x = -11; x <= 11; x += 0.1) {
        y = (graph.a * x * x) + (graph.b * x) + (graph.c);
        state.graphContext.lineTo(xCoord(x), yCoord(y));
        state.graphContext.stroke();
    }

    state.graphContext.restore();
}


// Helper function, to calculate the x canvas-coordinate for a logical x value.
function xCoord(x) {
    return state.W / 2 + x * state.CELL_SIZE;
}


// Helper function, to calculate the y canvas-coordinate for a logical y value. 
// Remember that whereas logical y values increase as you go up the graph, the pixel coordinates must decrease!
function yCoord(y) {
    return state.H / 2 - y * state.CELL_SIZE;
}


// Draw a large header text on the specified canvas context.
function drawHeaderText(context, headerText) {

    context.save();

    context.font = '30pt Verdana';
    context.fillStyle = 'lightblue';
    context.strokeStyle = 'darkblue';
    context.textBaseline = 'top';

    context.fillText(headerText, 0, 0);
    context.strokeText(headerText, 0, 0);

    context.restore();
}


// Draw the number labels on the graph.
function drawLabels() {

    state.graphContext.save();

    state.graphContext.font = '10pt "Courier New"';
    state.graphContext.strokeStyle = 'red';
    state.graphContext.lineWidth = 0.5;

    // Draw the labels on the x axis.
    state.graphContext.textBaseline = 'top';
    state.graphContext.textAlign = 'center'

    for (var x = -10; x <= 10; x++) {
        state.graphContext.strokeText(x.toString(), xCoord(x), state.H / 2 + 2);
    }

    // Draw the labels on the y axis.
    state.graphContext.textBaseline = 'middle';
    state.graphContext.textAlign = 'right'

    for (var y = -10; y <= 10; y++) {
        state.graphContext.strokeText(y.toString(), state.W / 2 - 2, yCoord(y));
    }

    state.graphContext.restore();
}


// Draw the equation text for a graph on the legend canvas.
function drawGraphEquation(graph) {

    var x = 0;
    var y = 60 * state.graphs.length;

    state.legendContext.save();

    // Set the colour and baseline for the text.
    state.legendContext.fillStyle = graph.colour;
    state.legendContext.textBaseline = 'top';

    // Write text in the following format:
    //
    //         2     1     0
    //   y = ax  + bx  + cx 
    //
    // The fontsize for the regular text is 20pt.
    // The fontsize for the power superscripts is 10pt.
    x += drawLegendTextSnippet(x, y, 20, 'y = ' + (graph.a > 0 ? '' : '-') + Math.abs(graph.a) + 'x');
    x += drawLegendTextSnippet(x, y, 10, '2');
    x += drawLegendTextSnippet(x, y, 20, (graph.b > 0 ? ' + ' : ' - ') + Math.abs(graph.b) + 'x');
    x += drawLegendTextSnippet(x, y, 10, '1');
    x += drawLegendTextSnippet(x, y, 20, (graph.c > 0 ? ' + ' : ' - ') + Math.abs(graph.c) + 'x');
    x += drawLegendTextSnippet(x, y, 10, '0');

    state.graphContext.restore();
}


// Helper function, to draw a snippet of text in the legend, using the specified coordinates and fontsize.
function drawLegendTextSnippet(x, y, fontSize, text) {
    state.legendContext.font = fontSize + 'pt arial';
    state.legendContext.fillText(text, x, y);

    // Return the width of the text just displayed.
    return state.legendContext.measureText(text).width;
}

