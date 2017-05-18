//dependencies
import React from 'react';

//component
class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

		//binding functions
	}

	render() {
		return (
			<div className={this.props.cell === 1 ? "living cell" : "cell"}>
			</div>
		)
	}
}

module.exports = Cell;