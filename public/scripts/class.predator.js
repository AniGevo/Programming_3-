class Predator extends LivingCreature {
	constructor(x, y, ind) {
		super(x, y, ind)
		this.energy = 10;


	}

	newDirections() {
		this.directions = [


			[this.x - 2, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 2, this.y - 2],
			[this.x - 2, this.y],
			[this.x + 2, this.y],
			[this.x - 2, this.y + 1],
			[this.x, this.y + 2],
			[this.x + 2, this.y + 2],

			[this.x - 1, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 1],

			[this.x - 1, this.y + 2],
			[this.x - 2, this.y + 1],
			[this.x + 1, this.y + 2],
			[this.x + 2, this.y + 1],

			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 1],
		];
	}





	move() {
		var datark = this.getDirections(0);
		var cord = random(datark);
		if (cord) {
			this.energy--;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0

			this.x = x;
			this.y = y;

			for (var i in EatGrassArr) {
				if (EatGrassArr[i].x == x && EatGrassArr[i].y == y) {
					EatGrassArr.splice(i, 1);
				}
			}
			if (this.energy == 0) {
				this.die(x, y);
			}

		}
	}





	eat() {
		var merel = this.getDirections(10);
		var mcord = random(merel);
		if (mcord) {


		}
		else {
			var datark = this.getDirections(2);
			var cord = random(datark);
			if (cord) {
				this.multiply++;
				this.energy = 5;
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0

				this.x = x;
				this.y = y;
				for (var i in xotArr) {
					if (xotArr[i].x == x && xotArr[i].y == y) {
						xotArr.splice(i, 1);
					}
				}
				if (this.multiply == 20) {
					this.mul();
				}


			}
			else {
				this.move();
			}
		}



	}

	die(x, y) {
		matrix[y][x] = 0;
		for (var i in PredatorArr) {
			if (PredatorArr[i].x == x && PredatorArr[i].y == y) {
				PredatorArr.splice(i, 1);
			}

		}
	}






	mul() {
		//console.log(d);
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if (cord) {
			var x = cord[0];
			var y = cord[1];

			var norgishatich = new Predator(x, y, this.index);
			PredatorArr.push(norgishatich);

			matrix[y][x] = 3;
			this.multiply = 0;
		}

	}

}
