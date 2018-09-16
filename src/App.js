import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProductView from './components/ProductView/ProductView';
import FeaturedCollectionVid from './components/FeaturedCollectionVid/FeaturedCollectionVid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="overall_wrapper">
        <Header />
        <div className="navigation_and_productview">
        <div className="navigation_wrapper">
        <Navigation />
        </div>
        <div className="productview_wrapper">
        <ProductView />
        </div>
        </div>
      <div className="featured_collection_vid">
        <FeaturedCollectionVid />
      </div>
      <div className="footer"></div>
      </div>
      </div>
    )
  }
}

export default App;
