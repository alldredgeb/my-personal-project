import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    this.expandMenu = this.expandMenu.bind(this);
  }

  expandMenu() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <section className="nav_overall">
        <div className="hamburger_wrapper">
          <div className="hamburger_container" onClick={this.expandMenu}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>
        {
        this.state.open ? 
          <ul className="links_container">
            <li>Home</li>
            <li>Accessories</li>
            <li>Footwear</li>
            <li>Jeans</li>
            <li>Outerwear</li>
            <li>Pants</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
        </ul>
          : 
          null
        }
        
          <div>
        </div>
      </section>
    )
  }
}

export default Navigation;