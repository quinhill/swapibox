import React from 'react';
import './button-container.css';

const ButtonContainer = ({getData}) => {

  const handleClick = (e) => {
    e.preventDefault()
    const name = e.target.name
    getData(name)
  }

  return (
    <div className="button-container">
      <button className="button" name="people" onClick={handleClick}>
        people
      </button>
      <button className="button" name="planets" onClick={handleClick}>
        planets
      </button>
      <button className="button" name="vehicles" onClick={handleClick} >
        vehicles
      </button>
    </div>
  )
}

export default ButtonContainer;