import React, { Component } from 'react';

class Menu extends Component {
	render(){
		return (
			<div className="menu">
				<div className="option search">
					<i className="material-icons">search</i>
				</div>
                <div className="option toggle">
					<i className="material-icons">line_weight</i>
				</div>
				<div className="option ">
					<i className="material-icons">assignment_ind</i>
				</div>
				<div className="option ">
					<i className="material-icons">event</i>
				</div>
				<div className="option ">
					<i className="material-icons">favorite_border</i>
				</div>

				<div className="option ">
					<i className="material-icons">stars</i>
				</div>
				<div className="option ">
					<i className="material-icons">help</i>
				</div>
				<div className="option ">
					<i className="material-icons">add_circle</i>
				</div>
				
			</div>
		);
	}
}

export default Menu;