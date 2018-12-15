var matrix = [];
var p = 40;
var m = 40;
var side = 20;

var z = Math.floor((Math.random() * 2) +1);


for(y = 0; y < p; y++){
matrix[y] = [];
for (var x = 0; x < m; x++) {
    matrix[y][x]  = z;
}

}
module.exports = matrix;
