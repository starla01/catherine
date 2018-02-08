import React, { Component } from 'react';
import Cart from './cart';
import Menu from './menu';

class Header extends Component {
    constructor() {
        super();
		//this.removeFromCart = this.removeFromCart.bind(this);
		// this.state = {
		// 	cart: []
		// };
	}
	render(){
		return (
			<div className="App-header">
                <Menu />
                <Cart/>
                <i className="material-icons">face</i>    
			</div>
		);
	}
}

export default Header;