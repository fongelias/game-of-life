//dependencies
import React from 'react';

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
					this.props.rows.map((item, i) => {
						return <Row key={i} cells={item} />
					})
				}
			</div>
		)
	}
}