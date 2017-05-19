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
			rows: this.grid.getMatrix(),
			size: 10,
			speed: 300
		};

		//binding functions
		this.setValue = this.setValue.bind(this);
		this.updateSpeed = this.updateSpeed.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.clear = this.clear.bind(this);
		this.updateSize = this.updateSize.bind(this);
	}

	setValue(x,y,value){
		this.grid.setValue(x,y,value);
		this.setState({
			rows: this.grid.getMatrix()
		})
	}

	updateSpeed(e) {
		this.stop();
		this.setState({
			speed: parseInt(e.target.value)
		})
	}

	start() {
		console.log("gameOfLifeApp.start()");
		this.gameInterval = setInterval(() => {
			this.setState({
				rows: this.grid.nextGeneration()
			});
		}, this.state.speed);
	}

	stop() {
		console.log("gameOfLifeApp.stop(" + this.gameInterval + ")");
		clearInterval(this.gameInterval);
	}

	clear() {
		clearInterval(this.gameInterval);
		this.grid = new Grid(this.state.size,this.state.size);
		this.setState({
			rows: this.grid.getMatrix()
		});
	}

	updateSize(e) {
		this.stop();
		let newSize = parseInt(e.target.value);
		this.grid = new Grid(newSize, newSize);
		this.setState({
			size: newSize,
			rows: this.grid.getMatrix()
		});
	}

	render() {
		return (
			<div className="game-of-life-container">
				<div className="button-container">
					<select className="speed-selector" 
							onChange={this.updateSpeed} 
							value={this.state.speed}>
						<option value={1000}>Slow</option>
						<option value={300}>Normal</option>
						<option value={100}>Fast</option>
					</select>
					<button className="start-button" onClick={this.start}>Start</button>
					<button className="stop-button" onClick={this.stop}>Stop</button>
					<button className="clear-button" onClick={this.clear}>Clear</button>
					<select className="size-selector" 
							onChange={this.updateSize} 
							value={this.state.size}>
						<option value={10}>Small (10x10)</option>
						<option value={20}>Regular (20x20)</option>
						<option value={30}>Large (30x30)</option>
					</select>
				</div>
				<div className="generation-counter"></div>
				<div className="game-container">
					<Board rows={this.grid.getMatrix()} setValue={this.setValue}/>
				</div>
			</div>
		)
	}

}

ReactDOM.render(
	<GameOfLifeApp />,
	document.getElementById("game-of-life-app")
);





