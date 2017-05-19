//dependencies
//component
class Grid {
	constructor(x,y) {
		this.matrix = [[]];
		this.setMatrix(x,y);
	}

	setMatrix(x,y) {
		this.x = x;
		this.y = y;
		let arr = [];
		for(let i = 0; i < y; i++) {
			arr.push(Array(x).fill(0));
		}
		this.matrix = arr;
	}

	setValue(x,y,value) {
		console.log("setValue()");
		if(this.matrix[y][x] !== undefined) {
			this.matrix[y][x] = value;
		} else {
			console.log('error at setValue(' + x + "," + y + ')');
		}
	}

	getValue(x,y) {
		return this.matrix[y] ? (this.matrix[y][x] | 0) : 0; 
	}

	neighbors(x,y) {
		return (this.getValue(x-1,y-1) + this.getValue(x  ,y-1) + this.getValue(x+1,y-1)
			  + this.getValue(x-1,y  ) +           0            + this.getValue(x+1,y  )
			  + this.getValue(x-1,y+1) + this.getValue(x  ,y+1) + this.getValue(x+1,y+1));
	}

	evalState(x,y) {
		let neighbors = this.neighbors(x,y);
		let currState = this.getValue(x,y);
		return (currState === 0 ? (neighbors === 3 ? 1 : 0) 
			 : (neighbors === 2 | neighbors === 3 ? 1 : 0));
	}

	nextGeneration() {
		this.matrix = this.matrix.map((row, i) => {
			return row.map((cell, j) => {
				return this.evalState(j,i);
			});
		});

		return this.matrix;
	}

	getMatrix() {
		return this.matrix;
	}


}

module.exports = Grid;