var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

var matrix = require("./modules/matrix.js");
console.log(matrix);


io.on('connection', function (socket) {
  socket.emit("firstMatrix", matrix);
});


/*var time = frameRate(5);

function frameRate( frameCount){
  return 1000 / frameCount; 
}

function draw(){


  for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == 1) {
      matrix[i][j].mul();
    }
    if (matrix[i][j] == 2) {
      matrix[i][j].mul();
    }
    if (matrix[i][j] == 3) {
      matrix[i][j].eat();
    }
    if (matrix[i][j] == 4) {
      matrix[i][j].eat();
    }
  }
}
} */