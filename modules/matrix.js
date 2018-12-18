var matrix = [];
var p = 40;
var m = 40;

/*function random(arr) {
    var max = 40;
    var min = 0;
    var z = Math.floor(Math.random() * (max - min +1 ) + min);

}*/


for (var i = 0; i < p; i++) {
    matrix[i] = [j];
    for (var j = 0; j < m; j++) {
        matrix[i][j] = Math.floor(Math.random() * 4);
    }
}

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = new Grass(j, i, 1);
      }
      if (matrix[i][j] == 2) {
        matrix[i][j] = new EatGrass(j, i, 2);
      }
      if (matrix[i][j] == 3) {
        matrix[i][j] = new Predator(j, i, 3);
      }
      if (matrix[i][j] == 4) {
        matrix[i][j] = new Hunter(j, i, 4);
      }
    }
  }

module.exports = matrix;
