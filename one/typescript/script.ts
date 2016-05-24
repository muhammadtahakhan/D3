/// <reference path="./../../typings/tsd.d.ts" />


var dataset = [ 5, 10, 15, 20, 25, 12 ];

d3.select("body").selectAll("p")
.data(dataset)
.enter()
.append("p")
.text(function(d) {
return "I can count up to " + d;
})
.style("color", function(d) {
if (d > 10) { //Threshold of 15
return "red";
} else {
return "black";
}
});


var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
24, 18, 25, 9, 3 ];
d3.select("body").selectAll("div")
.data(dataset) // <-- The answer is here!
.enter()
.append("div")
.attr("class", "bar")
.style("height", function(d) {
var barHeight = d * 5;
return barHeight + "px";
});


//Width and height
var w = 500;
var h = 50;

var svg = d3.select("body")
.append("svg")
.attr("width", w) // <-- Here
.attr("height", h); // <-- and here!

var dataset = [ 5, 10, 15, 20, 25 ];
var circles = svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle");

circles.attr("cx", function(d, i) {
    console.log(i);
return (i * 50) + 25;
})
.attr("cy", h/2)
.attr("r", function(d) {
return d;
})
.attr("fill", "yellow")
.attr("stroke", "orange")
.attr("stroke-width", function(d) {
return d/2;
});

//Width and height
var w = 500;
var h = 100;
var barPadding = 1; // <-- New!

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
// .attr("x", 0)
// .attr("y", 0)
.attr("width", 20)
.attr("height", 100)
.attr("x", function(d, i) {
return i * 21; //Bar width of 20 plus 1 for padding
})
.attr("x", function(d, i) {
return i * (w / dataset.length);
})
.attr("width", w / dataset.length - barPadding)
.attr("height", function(d) {
return d * 4; // <-- Times four!
})
.attr("fill", function(d) {
return "rgb(0, 0, " + (d * 10) + ")";
});


svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
return d;
})
.attr("x", function(d, i) {
return i * (w / dataset.length);
})
.attr("y", function(d) {
return h - (d * 4);
});