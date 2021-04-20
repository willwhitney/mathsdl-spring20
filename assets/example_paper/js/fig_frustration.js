(function() {

  var svg = d3.select('.fig-frustration svg');

  var n = 15;
  var nodes = new Array(n);
  for (var i = 0; i < n; i++) {
    nodes[i] = {"name": i, "group": 1, "sign": Math.random() - 0.5};
  }
  var links = new Array()
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      links.push({"source": i, "target": j, "coupling": Math.random() - 0.5});
    }
  }
  var cyclicLinks = new Array()
  for (var i = 0; i < n - 1; i++) {
    cyclicLinks.push({"source": i, "target": i + 1});
  }
  cyclicLinks.push({"source": n - 1, "target": 0});


  updateLinks = function() {
    l = svg.selectAll(".link").data(links)

    l.enter().append("line")
      .attr("class", "link")
      .style("stroke-width", 2)
      .merge(l)
      .attr("stroke", function(d) {
        if (d.source.sign * d.target.sign * d.coupling > 0) {
          return 'rgba(200, 200, 200, 0.5)';
        } else {
          return 'rgba(228, 26, 28, 0.7)';
        }
      })
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    l.exit().remove();
  };

  updateNodes = function() {
    var u = svg.selectAll('.node').data(nodes);

    u.enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 15)
      .attr('fill', function(d) {
        if (d.sign > 0) {
          return 'green';
        } else {
          return 'purple';
        }
      })
      .on('click', function(d) {
        nodes[d.index].sign = -nodes[d.index].sign;
        if (nodes[d.index].sign > 0) {
          d3.select(this).attr('fill', 'green');
        } else {
          d3.select(this).attr('fill', 'purple');
        }
        updateLinks();
      })
      .merge(u)
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      })

    u.exit().remove()
  };

  var ticked = function() {
    updateNodes();
    updateLinks();
  }

  var force = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(350, 150))
      .force('link2', d3.forceLink().links(cyclicLinks).strength(2))
      .force('link', d3.forceLink().links(links).strength(0))
      .on('tick', ticked);

  // var node = svg.selectAll(".node")
  //     .data(nodes)
  //     .enter().append("g")
  //     .attr("class", "node")
  // node.append("circle").attr("r", "5");

  // node.append("text")
  //   .text(function(d) {return d.name });

  // force.on("tick", function() {
  //   link.attr("x1", function(d) { return d.source.x; })
  //     .attr("y1", function(d) { return d.source.y; })
  //     .attr("x2", function(d) { return d.target.x; })
  //     .attr("y2", function(d) { return d.target.y; });

  //   node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  // });

})();
