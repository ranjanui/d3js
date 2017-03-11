//d3.select('p').text('Hello World');
//d3.select("body").append('p').text('Hello World');
/*d3.select("body")
  .append('p')
  .style("color", "red")
  .text('Hello World');*/

var canvas = d3.select('body')
              .append('svg')
              .attr("width", 700)
              .attr("height", 500)
              .style("background", "#ededed");

var circle = canvas.append("circle")
              .attr("cx", 100)
              .attr("cy", 100)
              .attr("r", 75)
              .attr("fill", "red");

var rect = canvas.append("rect")
            .attr("width", 100)
            .attr("height", 50);

var line = canvas.append("line")
            .attr("x1", 100)
            .attr("y1", 20)
            .attr("x2", 10)
            .attr("y2", 400)
            .attr("stroke", "green")
            .attr("stroke-width", 5);
            