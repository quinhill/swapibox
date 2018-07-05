import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <header>
        <div className="logo-container">
        <img className="logo" alt="star wars logo" src="star-wars-logo.svg" />
      </div>
      <div className="fav-button-container">
        <button className="show-favorites" >
          View Favorites
          <p className="counter">0</p>
        </button>
      </div>
    </header>
  )
}

export default Header;