import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProductView from './components/ProductView/ProductView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <ProductView />
      <div className="featured_collection_vid"></div>
      <div className="footer"></div>
      </div>
    )
  }
}

export default App;
