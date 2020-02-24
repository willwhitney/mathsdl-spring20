(function() {

  var p = 3.0

  var E_inf = 2 * Math.sqrt((p - 1) / p);

  var xs = new Array();
  var ys = new Array();

  var I1 = function(x) {
    return -x / E_inf / E_inf * Math.sqrt(x * x - E_inf * E_inf) - Math.log(-x + Math.sqrt(x * x - E_inf * E_inf)) + Math.log(E_inf);
  };
  var rate_fn = function(x, k) {
    if (x >= -E_inf) {
      return 0.5 * Math.log(p - 1.0) - (p - 2.0) / p;
    } else {
      return 0.5 * Math.log(p - 1.0) - (p - 2.0) / (p - 1.0) / 4 * x * x - (k + 1) * I1(x);
    }
  };


  var max_k = 120;
  var ks = [0, 1, 2, 5, 10, 20, 40, 100];
  var colorScale = d3
      .scaleSequential(d3.interpolateViridis)
      .domain([0, Math.log(1.0 + max_k)]);

  var pts = 1000;

  xss = new Array();
  yss = new Array();
  for (var j = 0; j < ks.length; j++) {
    xs = new Array();
    ys = new Array();
    for (var i = 0; i < pts; i++) {
      var x = -1.67 + (-E_inf + 0.005 + 1.67) * i / pts;
      var y = rate_fn(x, ks[j]);
      if (y >= 0.0) {
        xs.push(x);
        ys.push(y);
      }
    }
    xss.push(xs);
    yss.push(ys);
  }

  var chart_data = new Array();
  for (var i = 0; i < ks.length; i++) {
    chart_data.push({
      "x": yss[i],
      "y": xss[i],
      "mode": 'lines',
      "line": {
        "color": colorScale(Math.log(1.0 + ks[i]))
      }});
  }

  final_xss = new Array();
  final_yss = new Array();
  for (var i = 0; i < pts; i++) {
    var x = -1.67 + (-E_inf + 0.005 + 1.67) * i / pts;
    var y = rate_fn(x, 0);
    if (y >= 0.0) {
      final_xss.push(y);
      final_yss.push(-E_inf);
    }
  }

  chart_data.push({
    "x": final_xss,
    "y": final_yss,
    "mode": 'lines',
    "line": {
      "width": 4,
      "color": colorScale(Math.log(1.0 + max_k)),
      "dash": "dot"
    }});

  yticks = new Array();
  yticktext = new Array();
  for (var i = 0; i < ks.length; i++) {
    yticks.push(Math.min.apply(null, xss[i]));
    yticktext.push(' ');
  }
  yticks.push(-E_inf);
  yticktext.push(' ');

  var layout = {
    showlegend: false,
    'xaxis': {
      "range": [0, 0.5 * Math.log(p - 1.0) - (p - 2.0) / p + 0.0005],
      "visible": true,
      "showticklabels": false,
      "ticks": "none",
      "showline": true,
    },
    'yaxis': {
      "range": [-1.66, -E_inf + 0.005],
      "tickvals": yticks,
      "ticktext": yticktext,
      "ticks": "outside",
      "showline": true
    }
  };

  Plotly.newPlot("figRatesInner", chart_data, layout, {displayModeBar: false});
  d3.select('#figRatesInner svg')
      .append("foreignObject")
      .attr("x", 175)
      .attr("y", 520)
      .attr("width", 100)
      .attr("height", 100)
      .append("xhtml:div")
      .attr("id", "rateLabelInf")
      .append("xhtml:div")
      .html(function() {
        setTimeout(
          function() {
            MathJax.Hub.Config({displayAlign: "center"});
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, '#rateLabelInf']);
          },
          10
        );
        return "$\\Theta_{k, 3}(u)$";
      });
d3.select('#figRatesInner svg')
      .append("foreignObject")
      .attr("x", 60)
      .attr("y", 90)
      .attr("width", 100)
      .attr("height", 100)
      .append("xhtml:div")
      .attr("id", "rateLabel" + i)
      .append("xhtml:div")
      .html(function() {
        setTimeout(
          function() {
            MathJax.Hub.Config({displayAlign: "center"});
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, '#rateLabel' + i]);
          },
          10
        );
        return "$u$";
      });



  var xScale = d3.scaleLinear().domain([0, 1]).range([0, 500]);

  var nodes = new Array();

  var levels = [380, 325, 290, 235, 190, 155, 125, 95];
  var E_inf_level = 65;
  var ground_level = 383;

  for (var i = 0; i < ks.length; i++) {
    var num = 0;
    for (var j = 0; j < yss[i].length; j++) {
      num += Math.exp(20 * yss[i][j]) / 4;
    }

    for (var j = 0; j < num; j++) {
      var level = E_inf_level + 10 + (levels[i] - E_inf_level) * Math.random();
      if ((i == 0) && (level - E_inf_level >= 20)) {
        level -= 12;
      }
      nodes.push({
        "radius": 4 + Math.random(),
        "xvalue": 0.1 + 0.8 * Math.random(),
        "yvalue": level,
        "color": colorScale(Math.log(1.0 + ks[i]))
      });
    }
  }

var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(-1))
  .force('x', d3.forceX().x(function(d) {
    return xScale(d.xvalue);
  }))
  .force('y', d3.forceY().y(function(d) {
    return d.yvalue;
  }).strength(3))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius;
  }))
  .on('tick', ticked);

d3.select('#figRatesInner2 svg g').append("rect")
    .style("fill", colorScale(Math.log(1.0 + max_k)))
    // .style("stroke-width", 4)
    .attr("x", xScale(0))
    .attr("width", xScale(1) - xScale(0))
    .attr("y", E_inf_level - 60)
    .attr("height", 60 + 4);
d3.select('#figRatesInner2 svg g').append("text")
    .attr("text-anchor", "middle")
    .attr("font-variant", "small-caps")
    .attr("font-weight", "bold")
    .attr("x", xScale(0.5))
    .attr("y", E_inf_level)
    .attr("fill", "#C0AF14")
    .text("Floor");


d3.select('#figRatesInner2 svg g').append("line")
    .style("stroke", colorScale(0))
    .style("stroke-width", 4)
    .attr("x1", xScale(0))
    .attr("x2", xScale(1))
    .attr("y1", ground_level)
    .attr("y2", ground_level);
d3.select('#figRatesInner2 svg g').append("text")
    .attr("text-anchor", "middle")
    .attr("font-variant", "small-caps")
    .attr("font-weight", "bold")
    .attr("x", xScale(0.5))
    .attr("y", ground_level - 5)
    .attr("fill", colorScale(0))
    .text("Ground");

  for (var i = 0; i < ks.length; i++) {
    d3.select('#figRatesInner2 svg')
      .append("foreignObject")
      .attr("x", 580)
      .attr("y", 86 + levels[i])
      .attr("width", 100)
      .attr("height", 100)
      .append("xhtml:div")
      .attr("id", "rateLabel" + i)
      .append("xhtml:div")
      .html(function() {
        setTimeout(
          function() {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, '#rateLabel' + i]);
          },
          10
        );
        return "$-E_{" + ks[i] + "}$";
      })
  }
d3.select('#figRatesInner2 svg')
      .append("foreignObject")
      .attr("x", 580)
      .attr("y", 86 + E_inf_level)
      .attr("width", 100)
      .attr("height", 100)
      .append("xhtml:div")
      .attr("id", "rateLabel" + i)
      .append("xhtml:div")
      .html(function() {
        setTimeout(
          function() {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, '#rateLabel' + i]);
          },
          10
        );
        return "$-E_{\\infty}$";
      })

function ticked() {
  var u = d3.select('#figRatesInner2 svg g')
    .selectAll('circle')
    .data(nodes);

  u.enter()
    .append('circle')
    .attr('r', function(d) {
      return d.radius;
    })
    .style('fill', function(d) {
      return d.color;
    })
    .merge(u)
    .attr('cx', function(d) {
      return d.x;
    })
    .attr('cy', function(d) {
      return d.y;
    })

  u.exit().remove();
}

})();
