d3.select('.main').html(null); //remove 'main' div html
var svg = d3.select('.main').append('svg'); //create svg object in main div
svg.attr('width',600).attr('height','300'); // set height and width attributes
var y = d3.scale.linear().domain([15,90]).range([250,0]); // create a linear scale for y axis
var x = d3.scale.log().domain([250,100000]).range([0,600]); // create log scale for x axis
var r = d3.scale.sqrt().domain([52070,1380000000]).range([10,40]); // create sqrt scale for circle size
console.log(y(77),x(13330),r(1380000000)); // print out the pixel values when transformed with the scale
svg.append('circle').attr('fill','red').attr('r',r(1380000000)).attr('cx',x(13330)).attr('cy',y(77)) // append a circle to svg and set attributes
