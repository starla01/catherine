import React from 'react';
import { removeFromCart } from '../actions';
import {connect} from 'react-redux';

const Cart = ({cart, removeFromCart}) =>  {
		return (
			<div className="shoppingCart">
				<div className="cartTitle">
					<label>Carrito de compras</label>
					<i className="material-icons">shopping_cart</i>
				</div>
				{
					cart.map((person, key) =>
						<div key={key} className={person.name} onClick={ () => removeFromCart(person)}> 
						{person.name}
						</div>

					)
				}
				<div className="paypalButton">
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value="6RNT8A4HBBJRE" />
						<input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_buynow_107x26.png" alt="Buy Now" />
						<img alt="" src="https://paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
					</form>

				</div>
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