//dependencies
import React from 'react';
import Cell from './cell.jsx';

//component
class Row extends React.Component {
	constructor(props) {
		super(props);
		this.setState = {

		};

		//binding functions
	}

	render() {
		return(
			<div className="row">
				{
					this.props.cells.map((cell,i) => {
						return <Cell key={i} y={this.props.y} x={i} cell={cell} />
					})
				}
			</div>
		)
	}
}

module.exports = Row;