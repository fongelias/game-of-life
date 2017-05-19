
class Grid {
	constructor(x,y) {
		this.matrix = [[]];
		this.setMatrix(x,y);
	}

	setMatrix(x,y) {
		let arrX = Array(x).fill(0);
		this.matrix = Array(y).fill(arrX);
	}

	getMatrix() {
		return this.matrix;
	}


}

module.exports = Grid;