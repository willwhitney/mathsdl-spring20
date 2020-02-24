function functor(v) {
  return typeof v === "function" ? v : function() {
    return v;
  };
};

function sliderFactory(d) {
  let width = 600,
  height = 55,
  range=[0,100],
  step=1,
  ticks=20,
  value=0,
  margin = {top: 20, right: 20, bottom: 0, left: 20},
  scale,
  label,
  orient="horizontal",
  called,
  dragHandler = function(d){},
  svg,
  sliderScale

  var parseNum = d3.format(".2g");

  function drawSlider(p) {
    //console.log("drawSlider")
    //console.log("drawSlider",value)
    let rounded=value
    if(called) {
        reposition();
    }
    else {init()}
    function init() {
      //console.log("parametres",width,height,range,p);

      svg = p.append("svg")
      svg.attr("width", width)
      .attr("height", height)

      let track = svg.append("g")
        .attr("class", "slider")
        .attr("id", "slider")
        .call(d3.drag()
            .on("drag", function() {
              dragSlider(this)
              dragHandler(drawSlider);
              value=rounded;
            }))
        .attr("transform", sliderTranslation(orient));

      sliderScale = getScale(orient);

      if (orient=="horizontal") {
        track.append("line")
          .attr("class", "track")
          .attr("x1", sliderScale.range()[0])
          .attr("x2", sliderScale.range()[1])
        .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
          .attr("class", "track-overlay")
          .attr("x1", sliderScale.range()[0])
          .attr("x2", sliderScale(value))
      }
      if (orient=="vertical") {
        track.append("line")
          .attr("class", "track")
          .attr("y1", sliderScale.range()[0])
          .attr("y2", sliderScale.range()[1])
        .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        . attr("class", "track-overlay")
          .attr("y1", sliderScale.range()[0])
          .attr("y2", sliderScale(value));
      }

      if (scale) {
        let axisType = getAxis(orient)
        let axis=track.append("g")
          .attr("class", "sliderAxis")
          .attr("transform", axisTranslation(orient))
          .call(d3[axisType](sliderScale)
            .tickSize(8)
            .tickValues(calculateTicks(range,ticks))
            );
      }

      let handle=track.append('g')
        .attr("class", "handle")
        .attr("transform", transHandle(orient))

      handle.append("circle")
        .attr("r", 12)
      if(label) {addLabel(handle)}

      called=true

      function dragSlider(svg) {
        let slider=d3.select(svg)
        let d = getMousePos(orient);
        rounded = d + step/2 - (d+step/2) % step;
        // console.log("rounded",rounded)
        let handle=slider.selectAll(".handle")
          .attr("transform", transHandle(orient))

        if (label) {
          let labelText=slider.selectAll(".labelText")
            .text(parseNum(rounded))
        }
        let overlay=slider.selectAll(".track-overlay")
        if(orient=="vertical"){
          overlay.attr("y2", sliderScale(rounded))
        }
        else {overlay.attr("x2", sliderScale(rounded))}
      }
    }
    ///End of init()
    function reposition() {
      sliderScale = getScale(orient);
      svg.attr("width", width)
      if(orient=="vertical") {
        let track=svg.selectAll(".track")
          .attr("y2", sliderScale.range()[1])
        let ovelay=svg.selectAll(".track-overlay")
          .attr("y2", sliderScale(value))
      }
      else{
        let track=svg.selectAll(".track")
          track.attr("x2", sliderScale.range()[1])
        let ovelay=svg.selectAll(".track-overlay")
          .attr("x2", sliderScale(value))
      }
      if (scale) {
        let axisType = getAxis(orient)
        let axis=svg.selectAll(".sliderAxis")
          .call(d3[axisType](sliderScale)
          .tickSize(8)
          .tickValues(calculateTicks(range,ticks))
          );
      }
      let handle=svg.selectAll(".handle")
        .attr("transform",transHandle(orient))

      let slider=svg.selectAll("g.slider")
        .attr("transform",sliderTranslation(orient))

      rounded = value
    }

    function getMousePos(orient) {
      return{
        "horizontal":sliderScale.invert(d3.event.x-20),
        "vertical":sliderScale.invert(d3.event.y-20)
      }[orient]
      }

    function addLabel(handle){
      handle.append("rect")
        .attr("class","label")
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("x",-18)
        .attr("y",-35)
        .attr("width",36)
        .attr("height",20)
      handle.append("text")
        .attr("class","labelText")
        .attr("y",-20)
        .text(parseNum(rounded))
    }

    function calculateTicks(range,interval) {
      let intervals=d3.range(range[0], range[1], interval);
      intervals.push(range[1])
      return intervals
    }

    function transHandle(orient) {
      return{
        "horizontal":"translate("+(sliderScale(rounded)+2)+",0)",
        "vertical":"translate(0,"+(sliderScale(rounded))+")"
      }[orient]
    }

    function sliderTranslation(orient) {
      return {
        "horizontal":"translate(" + margin.left + "," +(margin.top) + ")",
        "vertical":"translate(" + ((width/2)+margin.left)+ "," +margin.top+ ")"
      }[orient];
    }

    function axisTranslation(orient) {
      return {
        "horizontal":"translate(0,10)",
        "vertical":"translate(-10,0)"
      }[orient];
    }

    function getAxis(orient) {
      return {
        "horizontal":"axisBottom",
        "vertical":"axisLeft"
      }[orient];
    }

    function getScale(orient){
      return {
        "horizontal":createScale(0,width-margin.left-margin.right),
        "vertical":createScale(height-margin.top-margin.bottom,0)
      }[orient];
    }

    function createScale(val1,val2){
      let scale=d3.scaleLinear()
        .domain(range)
        .range([val1,val2])
        .clamp(true);
      return scale
    }
  }

  //set defaults
  drawSlider.dragHandler = function (f) {
    if (!f) return dragHandler;
    dragHandler = functor(f);
    return drawSlider;
  };

  drawSlider.scale = function (n) {
    if (!n) return scale;
    scale = n
    return drawSlider;
  };

  drawSlider.label = function (n) {
    if (!n) return label;
    label = n
    return drawSlider;
  };

  drawSlider.value = function (n) {
    if (n==undefined) return value;
    value = n;
    return drawSlider;
  };

  drawSlider.orient = function (n) {
    if (!n) return orient;
    orient = n
    return drawSlider;
  };

  drawSlider.ticks = function (n) {
    if (!n) return ticks;
    if(n<=1) {n=1}
    ticks = n
    return drawSlider;
  };

  drawSlider.margin = function (n) {
    if (!n) return margin;
    margin = n
    return drawSlider;
  };

  drawSlider.range = function (n) {
    if (!n) return range;
    range = n
    return drawSlider;
  };

  drawSlider.step = function (n) {
    if (!n) return step;
    step = n
    return drawSlider;
  };

  drawSlider.width = function (n) {
    if (!n) return width;
    width = n;
    return drawSlider;
  };

  drawSlider.height = function (n) {
    if (!n) return height;
    height = n;
    return drawSlider;
  };

  return drawSlider;
}
