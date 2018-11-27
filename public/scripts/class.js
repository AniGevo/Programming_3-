class Grass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	mul(){
		this.multiply++;
		if(this.multiply == 1){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			//console.log(cord);
			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}


}



class EatGrass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	move(){
		var datark = this.getDirections(0);
		var cord = random(datark);
		
		if(cord){
			this.energy--;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 
			if(this.energy == 0){
				this.die(x,y);
			}
		}
	}

	eat(){
		var datark = this.getDirections(1);
		var cord = random(datark);
		if(cord){
			this.multiply++;
			this.energy = 5;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 
			for (var i in xotArr)
			{
				if(xotArr[i].x == x && xotArr[i].y == y){
				 xotArr.splice(i, 1);
				}
			}
			if (this.multiply == 2){
				this.mul();
			}


		}
		else {
			this.move();
		}
	}

	die(x,y){
		matrix[y][x] = 0;
        for (var i in EatGrassArr){
			if( EatGrassArr[i].x == x &&  EatGrassArr[i].y == y){
				  EatGrassArr.splice(i, 1);
				}

		}
	}



	mul(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];

			var norxotaker= new EatGrass(x,y,this.index);
			EatGrassArr.push(norxotaker);

			matrix[y][x] = 2;
			this.multiply = 0;
	     }

     }
}




class Predator{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 10;
		this.multiply = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1],

		    [this.x - 2, this.y - 2],
		    [this.x    , this.y - 2],
		    [this.x + 2, this.y - 2],
		    [this.x - 2, this.y    ],
		    [this.x + 2, this.y    ],
		    [this.x - 2, this.y + 1],
		    [this.x    , this.y + 2],
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


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}


	move(){
		var datark = this.getDirections(0);
		var cord = random(datark);
		if(cord){
			this.energy--;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 

			for (var i in EatGrassArr)
			{
				if(EatGrassArr[i].x == x && EatGrassArr[i].y == y){
				 EatGrassArr.splice(i, 1);
				}
			}
			if(this.energy == 0){
				this.die(x,y);
			}
			
		}
	}





eat(){
		var merel = this.getDirections(10);
		var mcord = random(merel);
		if(mcord){


		}
		else {
			var datark = this.getDirections(2);
			var cord = random(datark);
			if(cord){
				this.multiply++;
				this.energy = 5;
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x]=0

				this.x=x;
				this.y=y; 
				for (var i in xotArr)
				{
					if(xotArr[i].x == x && xotArr[i].y == y){
					xotArr.splice(i, 1);
					}
				}
				if (this.multiply == 20){
					this.mul();
				}


			}
			else {
				this.move();
			}
		}


		
	}

	die(x,y){
		matrix[y][x] = 0;
       for (var i in PredatorArr){
			if( PredatorArr[i].x == x &&  PredatorArr[i].y == y){
				  PredatorArr.splice(i, 1);
				}

		}
	}






mul(){
	//console.log(d);
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];

			var norgishatich= new Predator(x,y,this.index);
			PredatorArr.push(norgishatich);

			matrix[y][x] = 3;
			this.multiply = 0;
	     }

     } 

}





class Hunter{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
			
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}



	move(){
		var datark = this.getDirections(0);
		var cord = random(datark);
		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 4;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 
			for (var i in xotArr)
			{
				if(xotArr[i].x == x && xotArr[i].y == y){
				 xotArr.splice(i, 1);
				}
			}

			for (var i in EatGrassArr)
			{
				if(EatGrassArr[i].x == x && EatGrassArr[i].y == y){
				 EatGrassArr.splice(i, 1);
				}
			}

			for (var i in PredatorArr)
			{
				if(PredatorArr[i].x == x && PredatorArr[i].y == y){
				 PredatorArr.splice(i, 1);
				}
			}



			
			}
			
		}




eat(){

		var datark1 = this.getDirections(1);
		var datark2 = this.getDirections(2);
		var datark3 = this.getDirections(3);
		var datarkner = datark1.concat(datark2, datark3);
		var cord = random(datarkner);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			matrix[y][x] = 4;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 

			if(matrix[y][x] == 1){
				for (var i in xotArr)
				{
					if(xotArr[i].x == x && xotArr[i].y == y){
					xotArr.splice(i, 1);
					}
				}
			}

			else if(matrix[y][x] == 2){
				for (var i in EatGrassArr)
			{
				if(EatGrassArr[i].x == x && EatGrassArr[i].y == y){
				 EatGrassArr.splice(i, 1);
				}
			}

		}
		
		else if(matrix[y][x] == 3){
				for (var i in PredatorArr)
			{
				if(PredatorArr[i].x == x && PredatorArr[i].y == y){
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
