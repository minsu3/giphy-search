import React from 'react';

class Results extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<img
					src={this.props.link.images.fixed_height.url}
					alt={this.props.title}
				/>
			</div>
		)
	}
	
}

export default Results;