import React, { Component } from 'react';
import store from '../store';
import { addToCart } from '../actions'

class PersonList extends Component {
    constructor() {
        super();
		this.state = {
			persons: [
				{ ID:1, name:"Nancy", lastName: "Botello Carmona", mail:"nancyy2@hotmail.com", servicePrice: "500", gender: "F", "photo": "pym.jpg", "border": "darkPink"},
				{ ID:2, name:"Carmen", lastName: "Botello Carmona", mail:"carmen@hotmail.com", servicePrice: "800", gender: "F", "photo": "carmen.jpg", "border": "pink"},
				{ ID:3, name:"Raquel", lastName: "Rivera Carmona", mail:"pympoyita@hotmail.com", servicePrice: "1000", gender: "F", "photo": "nancy.jpg", "border": "lightPink"}
			]
		}
	}
	addToCart(person){
		store.dispatch(addToCart(person))
	}
	render(){
		return (
			<div className="personList">
				{
					this.state.persons.map((person, key) =>
						<div key={key} className={"person " + person.border}>
							<div className="addToCart" onClick={ () => this.addToCart(person)}>
								<div className="photo">
									<p></p>
									<img src={"/images/" + person.photo}  />
								</div>
								<div className="info">
									informacion
								</div>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}

export default PersonList;