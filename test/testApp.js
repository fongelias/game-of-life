var assert = require('assert');
var Grid = require('../dev/js/components/grid.js');

describe("Grid", function() {
	var test_grid = new Grid();

	describe("get/setMatrix", function() {
		it("respond with set matrix", function() {
			test_grid.setMatrix(3,3);
			var test_matrix = test_grid.getMatrix();

			var test_bool = test_matrix.length === 3;
			test_bool = test_matrix[0].length === 3;

			assert(test_bool);
		})
	});
	describe("randomizeMatrix", function() {
		it("", function() {
			assert(true,'Its false');


		});
	});
	describe("get/setValue", function() {
		it("", function() {
			assert(true,'Its false');


		});
	});
	describe("neighbors", function() {
		it("", function() {
			assert(true,'Its false');


		});
	});
	describe("evalState", function() {
		it("", function() {
			assert(true,'Its false');


		});
	});
	describe("nextGeneration", function() {
		it("", function() {
			assert(true,'Its false');


		});
	});

})