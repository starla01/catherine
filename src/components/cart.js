import React, { Component } from 'react';
import store from '../store';
import { removeFromCart } from '../actions';

console.log(removeFromCart)

class Cart extends Component {
    constructor() {
        super();
		this.removeFromCart = this.removeFromCart.bind(this);
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
		
		let _this = this;
		console.log("CART: ", _this.removeFromCart)
		return (
			<div className="cart">
				{
					this.state.cart.map((person, key) =>
						<p key={person.ID} onClick={ () => _this.removeFromCart(person)}>{person.name}</p>
					)
				}
			</div>
		);
	}
}

export default Cart;