import React, { Component } from 'react';
import './ProductView.css';

class ProductView extends Component {
  constructor() {
    super()
    this.state = {
      notDefined: false,
    }
  }

  render() {
    return (
      <div className="product_view_overall"></div>
    )
  }
}

export default ProductView;