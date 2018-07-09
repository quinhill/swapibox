import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

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

Header.Proptypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  displayFavorites: PropTypes.func
}

export default Header;