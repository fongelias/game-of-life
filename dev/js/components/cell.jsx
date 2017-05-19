//dependencies
import React from 'react';

//component
class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

		//binding functions
		this.updateCell = this.updateCell.bind(this);
	}

	updateCell() {
		this.props.setValue(this.props.x, this.props.y, this.props.cell ? 0 : 1);
	}

	render() {
		return (
			<div className={this.props.cell === 1 ? "living cell" : "cell"}
				onClick={this.updateCell}>
			</div>
		)
	}
}

module.exports = Cell;