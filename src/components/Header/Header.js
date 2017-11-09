import React, { Component } from 'react';
import './Header.css';
import searchImage from '../../images/h_search_image.svg';
import cartImage from '../../images/h_cart_image.svg';
import simpleLogo from '../../images/h_simple_logo.png';


class Header extends Component {
  render() {
    return (
      <div>
      <section className="h_overall">
      <div className="h_wrapper">
        <div className="search_and_cart_and_login">
          <div className="search_container">
            <img className="search_image" src={searchImage} alt="Search Image" />
          </div>
          <div className="cart_and_login_container">
            <img className="cart_image" src={cartImage} alt="Cart Image" />
            <div className="login_text">Login</div>
          </div>
        </div>
        <div className="logo_container">
        <img className="simple_logo" src={simpleLogo} alt="Simple Logo" />
        </div>
      </div>
      </section>
      </div>
    )
  }
}

export default Header;