import React, { Component } from 'react';
import store from '../store';

class PersonList extends Component {
    constructor() {
        super();

		this.state = {
			persons: [
				{ ID:1, name:"Nancy", lastName: "Botello Carmona", mail:"nancyy2@hotmail.com", servicePrice: "500", gender: "F"},
				{ ID:2, name:"Carmen", lastName: "Botello Carmona", mail:"carmen@hotmail.com", servicePrice: "800", gender: "F"},
				{ ID:3, name:"Raquel", lastName: "Rivera Carmona", mail:"pympoyita@hotmail.com", servicePrice: "1000", gender: "F"}
			]
		}
	}
	addToCart(person){
		console.log(person)
		store.dispatch({
			type: "ADD_TO_CART",
			person: person
		})
	}
	render(){
		return (
			<div className="personList">
				{
					this.state.persons.map((person, key) =>
						<div key={key} className="person">
							<div className="addToCart" onClick={ () => this.addToCart(person)}><p >{person.name}</p></div>
						</div>

						
						
					)
				}
			</div>
		);
	}
}

export default PersonList;