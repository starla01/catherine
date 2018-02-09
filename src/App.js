import React, { Component } from 'react';
import PersonList from './components/personList';
import Header from './components/header';
import Footer from './components/footer';
import Menu from './components/menu';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Cart/>
        <Header />
        <div className="container">
            <PersonList/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
