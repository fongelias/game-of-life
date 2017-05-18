//dependencies
import React from 'react';
import Row from './row.jsx'

//component
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows : props.rows
		}

		//binding functions
	}

	render() {
		return (
			<div className="board">
				{
					this.props.rows.map((cells, i) => {
						return <Row key={i} y={i} cells={cells} />
					})
				}
			</div>
		)
	}
}

module.exports = Board;