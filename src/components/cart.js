import React, { Component } from 'react';
import store from '../store';

class Cart extends Component {
    constructor() {
        super();
		//this.removeFromCart = this.removeFromCart.bind(this);
		this.state = {
			cart: []
		};
		store.subscribe(() =>{
			this.setState({
				cart: store.getState().cart
			})
		})
	}
	render(){
		console.log("CART: ", this.state.cart)
		return (
			<div className="cart">

				{
					this.state.cart.map((person, key) =>
						<p key={person.ID}>{person.name}</p>
					)
				}
			</div>
		);
	}
}

export default Cart;