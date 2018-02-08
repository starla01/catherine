import React, { Component } from 'react';
import './App.css';
import PersonList from './components/personList';

import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
            <PersonList/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
