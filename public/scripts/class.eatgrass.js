class EatGrass extends LivingCreature {
	constructor(x, y, ind) {
		super(x, y, ind)
		this.energy = 5;


	}



	move() {
		var datark = this.getDirections(0);
		var cord = random(datark);

		if (cord) {
			this.energy--;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;
			if (this.energy == 0) {
				this.die(x, y);
			}
		}
	}

	eat() {
		var datark = this.getDirections(1);
		var cord = random(datark);
		if (cord) {
			this.multiply++;
			this.energy = 5;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}
			if (this.multiply == 2) {
				this.mul();
			}


		}
		else {
			this.move();
		}
	}

	die(x, y) {
		matrix[y][x] = 0;
		for (var i in EatGrassArr) {
			if (EatGrassArr[i].x == x && EatGrassArr[i].y == y) {
				EatGrassArr.splice(i, 1);
			}

		}
	}



	mul() {
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			var norxotaker = new EatGrass(x, y, this.index);
			EatGrassArr.push(norxotaker);

			matrix[y][x] = 2;
			this.multiply = 0;
		}

	}
}