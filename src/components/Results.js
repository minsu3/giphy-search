import React from 'react';
import Image from 'react-bootstrap/Image'

class Results extends React.Component {
	render() {
		return (
			<div className="div">
				<div className="title-image">
					<h3 className="title" style={{ fontSize: "18px" }}>{this.props.title}</h3>
					<Image className="images" src={this.props.link.images.fixed_height.url} rounded />
				</div>
			</div>
		)
	}
	
}

export default Results;