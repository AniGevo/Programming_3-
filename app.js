var express = require('express');
var path = require('path');
var app = express();
var Matrix= require("./modules/matrix.js");

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


console.log(Matrix);

// var Grass = require("./modules/class.grass.js");
// var EatGrass = require("./modules/class.eatgrass.js");
// var Predator = require("./modules/class.predator.js");
// var Hunter= require("./modules/class.hunter.js");
//var Matrix= require("./modules/matrix.js");
//var LivingCreature = require("./modules/LivingCreature.js");


var time = frameRate(5);

function frameRate( frameCount){
  return 1000 / frameCount; 
}

function draw(){
  for(var i in grass){
    grass[i].mul();
  }

  
} 