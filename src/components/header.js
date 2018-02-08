import React, { Component } from 'react';
import Cart from './cart';

class Header extends Component {
	render(){
		return (
			<div className="App-header">
                <Cart/>
				<div className="backColor"></div>
				<div className="elemets">
					<div className="logo">
						<img src="/images/logo.png" />
					</div>
					<div className="userCart">
						<div className="user">
							<i className="material-icons">account_circle</i>
						</div>
						<div className="cart">
							<i className="material-icons">shopping_cart</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;