var p = 40;
var m = 40;
var r_side = 20;

function setup() {

  frameRate(5);
  createCanvas(p * r_side, m * r_side);
  background('#acacac');

}
function draw() {


  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j].index == 1) {
        matrix[i][j].mul();
          
      }
      if (matrix[i][j].index == 2) {
        matrix[i][j].eat();
      }
      if (matrix[i][j].index == 3) {
        matrix[i][j].eat();

      }

      if (matrix[i][j].index == 4) {
        matrix[i][j].eat();

      }
    }
  }
}





