import React from 'react';
import './header.css';

const Header = ({favorites, displayFavorites}) => {
  return (
    <header>
        <div className="logo-container">
        <img className="logo" alt="star wars logo" src="star-wars-logo.svg" />
      </div>
      <div className="fav-button-container">
        <button 
          className="show-favorites" 
          onClick={displayFavorites}
        >
          View Favorites
          <p className="counter">{favorites.length}</p>
        </button>
      </div>
    </header>
  )
}

export default Header;