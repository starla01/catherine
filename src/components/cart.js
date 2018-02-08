import React from 'react';
import { removeFromCart } from '../actions';
import {connect} from 'react-redux';

const Cart = ({cart, removeFromCart}) =>  {
		return (
			<div className="cart">
				{
					cart.map((person, key) =>
						<div key={key} className={person.name} onClick={ () => removeFromCart(person)}> {person.name}</div>
					)
				}
			</div>
		)
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	};
}

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart(person){
			dispatch(removeFromCart(person));
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);