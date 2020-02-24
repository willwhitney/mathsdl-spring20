Math.nrand = function() {
	var x1, x2, rad, y1;
	do {
		x1 = 2 * this.random() - 1;
		x2 = 2 * this.random() - 1;
		rad = x1 * x1 + x2 * x2;
	} while(rad >= 1 || rad == 0);
	var c = this.sqrt(-2 * Math.log(rad) / rad);
	return x1 * c;
};

(function() {
var origin = [280, 150];
var j = 16;
var points1 = [];
var points2 = [];
var alpha = 0;
var beta = 0;
var startAngle = Math.PI/6;
var svg1 = d3
    .select('.fig-sublevel-sets svg.svg1')
    .call(d3.drag().on('drag', dragged).on('start', dragStart).on('end', dragEnd))
    .append('g');
var svg2 = d3
    .select('.fig-sublevel-sets svg.svg2')
    .append('g');
var cutoff = 0.0;

var mx, my, mouseX, mouseY;

var surface = d3._3d()
    .scale(10)
    .x(function(d){ return d.x; })
    .y(function(d){ return d.y; })
    .z(function(d){ return d.z; })
    .origin(origin)
    .rotateY(startAngle)
    .rotateX(-startAngle)
    .shape('SURFACE', j*2);

var color = d3.scaleLinear();

var slider = sliderFactory();
var sliderHolder = d3.select('.fig-sublevel-sets .slider').call(
  slider
    .orient("vertical")
    .value(cutoff)
    .range([-4.0, 4.0])
    .step(0.5)
    .height(300)
    .width(80)
    .dragHandler(function(d) {
      cutoff = d.value();
      change();
    }));

function processData(data, tt){
  var planes = svg1.selectAll('path').data(data, function(d){ return d.plane; });
  planes
    .enter()
    .append('path')
    .attr('class', '_3d')
    .attr('fill', colorize)
    .attr('opacity', 0)
    .attr('stroke-opacity', 0.1)
    .merge(planes)
    .attr('stroke', 'black')
    .transition().duration(tt)
    .attr('opacity', 1)
    .attr('fill', colorize)
    .attr('d', surface.draw);
  planes.exit().remove();
  d3.selectAll('._3d').sort(surface.sort);
}

function colorize(d){
  var _y = (d[0].y + d[1].y + d[2].y + d[3].y)/4;
  return d.ccw ? d3.interpolateSpectral(color(_y)) : d3.color(d3.interpolateSpectral(color(_y))).darker(2.5);
}

function dragStart(){
  mx = d3.event.x;
  my = d3.event.y;
}

function dragged(){
  mouseX = mouseX || 0;
  mouseY = mouseY || 0;
  beta   = (d3.event.x - mx + mouseX) * Math.PI / 230 ;
  alpha  = (d3.event.y - my + mouseY) * Math.PI / 230  * (-1);
  processData(
    surface.rotateY(beta + startAngle).rotateX(alpha - startAngle)(points1).concat(
      surface.rotateY(beta + startAngle).rotateX(alpha - startAngle)(points2)), 0);
}

function dragEnd(){
  mouseX = d3.event.x - mx + mouseX;
  mouseY = d3.event.y - my + mouseY;
}

function init(eq1, eq2){
  points1 = [];
  points2 = [];

  for (var z = -j; z < j; z++) {
    for (var x = -j; x < j; x++) {
      points1.push({x: x, y: eq1(x, z), z: z});
      points2.push({x: x, y: eq2(x, z), z: z});
    }
  }

  var yMin = Math.min(
    d3.min(points1, function(d){ return d.y; }),
    d3.min(points2, function(d){ return d.y; }));
  var yMax = Math.max(
    d3.max(points1, function(d){ return d.y; }),
    d3.max(points1, function(d){ return d.y; }));

  color.domain([yMin, yMax]);

  processData(surface(points1).concat(surface(points2)), 1000);
}

var deg = 3;
var coeffs = new Array(deg);
for (var i = 0; i < deg; i++) {
  coeffs[i] = new Array(deg);
  for (var k = 0; k < deg; k++) {
    coeffs[i][k] = Math.nrand();
  }
}
var eqa = function(x, z){
  ret = 0.0;
  for (var i = 0; i < deg; i++) {
    for (var k = 0; k < deg; k++) {
      ret += coeffs[i][k] * Math.sin((i * x + k * z) / (i + k + 1));
    }
  }
  return ret;
};

function change(){
  var eqb = function(x, z){
    return -cutoff;
  };
  init(eqa, eqb);

  var size = 100;
  var x = new Array(size);
  var y = new Array(size);
  var z = new Array(size);
  for (var i = 0; i < size; i++) {
    x[i] = y[i] = -j + 2 * j * i / size;
    z[i] = new Array(size);
  }

  for (var i = 0; i < size; i++) {
    for (var k = 0; k < size; k++) {
      if (eqa(x[i], y[k]) >= -cutoff) {
        z[i][k] = 1.0;
      } else {
        z[i][k] = 0.0;
      }
    }
  }

  var data = [
    {
		  'z': z,
	    'type': 'contour',
      'showscale': false
	  }
  ];

  var layout = {
    showlegend: false,
    'yaxis': {
        'ticks': '',
        'showticklabels': false
    },
    'xaxis': {
        'ticks': '',
        'showticklabels': false
    }
  };

  Plotly.newPlot('fig-sublevel-sets-2', data, layout, {displayModeBar: false});

}

change();
})();
