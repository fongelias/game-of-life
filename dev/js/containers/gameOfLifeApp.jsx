//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../components/board.jsx';
import Grid from '../components/grid.js';
//styles
require('../../scss/gameOfLifeApp.scss');

//constants
//component
class GameOfLifeApp extends React.Component {
	constructor(props) {
		super(props);
		this.grid = new Grid(10,10);
		this.state = {

		};

		//binding functions
	}

	render() {
		return (
			<div className="game-of-life-container">
				<div className="button-container">
					<button className="start-button"></button>
					<button className="stop-button"></button>
					<button className="clear-button"></button>
					<select className="size-selector"></select>
					<select className="speed-selector"></select>
				</div>
				<div className="generation-counter"></div>
				<div className="game-container">
					<Board rows={this.grid.getMatrix()}/>
				</div>
			</div>
		)
	}

}

ReactDOM.render(
	<GameOfLifeApp />,
	document.getElementById("game-of-life-app")
);





