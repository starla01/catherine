import React, { Component } from 'react';
import './App.css';
import PersonList from './components/personList';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cart/>
        </header>
        <div>
            <PersonList/>
        </div>
        <footer className="App-header">Footer</footer>
      </div>
    );
  }
}

export default App;
