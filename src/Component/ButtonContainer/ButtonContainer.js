import React from 'react';
import './button-container.css';
import PropTypes from 'prop-types';

const ButtonContainer = ({checkState}) => {

  const handleClick = (e) => {
    e.preventDefault()
    const name = e.target.name
    checkState(name)
  }

  return (
    <div className="button-container">
      <button 
        className="button" 
        id="people" 
        name="people" 
        onClick={handleClick}
      >
        people
      </button>
      <button 
        className="button" 
        id="planets"
        name="planets"
        onClick={handleClick}
      >
        planets
      </button>
      <button 
        className="button" 
        id="vehicles"
        name="vehicles"
        onClick={handleClick} 
      >
        vehicles
      </button>
    </div>
  )
}

ButtonContainer.Proptypes = {
  getData: PropTypes.func.isRequired
}

export default ButtonContainer;