class Hunter extends LivingCreature {
	constructor(x, y, ind) {
		super(x, y, ind)
		this.energy = 5;

	}





	move() {
		var datark = this.getDirections(0);
		var cord = random(datark);
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 4;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}

			for (var i in EatGrassArr) {
				if (EatGrassArr[i].x == x && EatGrassArr[i].y == y) {
					EatGrassArr.splice(i, 1);
				}
			}

			for (var i in PredatorArr) {
				if (PredatorArr[i].x == x && PredatorArr[i].y == y) {
					PredatorArr.splice(i, 1);
				}
			}




		}

	}




	eat() {

		var datark1 = this.getDirections(1);
		var datark2 = this.getDirections(2);
		var datark3 = this.getDirections(3);
		var datarkner = datark1.concat(datark2, datark3);
		var cord = random(datarkner);
		if (cord) {
			var x = cord[0];
			var y = cord[1];
			matrix[y][x] = 4;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;

			if (matrix[y][x] == 1) {
				for (var i in xotArr) {
					if (xotArr[i].x == x && xotArr[i].y == y) {
						xotArr.splice(i, 1);
					}
				}
			}

			else if (matrix[y][x] == 2) {
				for (var i in EatGrassArr) {
					if (EatGrassArr[i].x == x && EatGrassArr[i].y == y) {
						EatGrassArr.splice(i, 1);
					}
				}

			}

			else if (matrix[y][x] == 3) {
				for (var i in PredatorArr) {
					if (PredatorArr[i].x == x && PredatorArr[i].y == y) {
						PredatorArr.splice(i, 1);
					}
				}

			}
		}
		else {
			this.move();
		}
	}




}
