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
					<label>Mis datos</label>
				</div>
				<div className="option ">
					<i className="material-icons">event</i>
					<label>Disponibilidad</label>
				</div>
				<div className="option ">
					<i className="material-icons">favorite_border</i>
					<label>Mis favoritas</label>
				</div>

				<div className="option ">
					<i className="material-icons">stars</i>
					<label>Las mejores</label>
				</div>
				<div className="option ">
					<i className="material-icons">help</i>
					<label>Ayuda</label>
				</div>
				<div className="option ">
					<i className="material-icons">add_circle</i>
					<label>Unete al Equipo</label>
				</div>
				
			</div>
		);
	}
}

export default Menu;