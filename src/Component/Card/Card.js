import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

const Card = (data) => {

  let picture = data.name.split(' ')  
  picture = picture[0]

 

  if (data.homeworld) {
    return (
      <div className={data.type} id={data.id} >
        <div className="picture" id={picture}></div>
        <h2>Name: {data.name}</h2>
        <h3>Homeworld: {data.homeworld}</h3>
        <h4>Species: {data.species}</h4>
        <p>homeworld population: {data.population}</p>
        <button
          onClick={data.addFavorite}
          value={data.index}
          name={data.type}
        >
          favorite
        </button>
      </div>
    )
  } else if (data.terrain) {
    const mappedResidents = data.residents.map(resident => {
      return `${resident}, `
    })
    return (
      <div className={data.type} id={data.id} >
        <div className="picture" id={picture}></div>
        <h2>Name: {data.name}</h2>
        <h3>Terrain: {data.terrain}</h3>
        <h4>Population: {data.population}</h4>
        <p>Climate: {data.climate}</p>
        <p>Residents: {mappedResidents}</p>
        <button
          onClick={data.addFavorite}
          value={data.index}
          name={data.type}
        >
          favorite
        </button>
      </div>
    )
  } else if (data.model) {
    return (
      <div className={data.type} id={data.id}>
        <div className="picture" id={picture}></div>
        <h2>Name: {data.name}</h2>
        <h3>Model: {data.model}</h3>
        <h4>class: {data.class}</h4>
        <p>Passengers: {data.passengers}</p>
        <button 
          onClick={data.addFavorite} 
          value={data.index}
          name={data.type}
        >
          favorite
        </button>
      </div>
    )
  }
}

Card.Proptypes = {
  data: PropTypes.object
}

export default Card;