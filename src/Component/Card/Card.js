import React from 'react';
import './card.css';

const Card = (props) => {

  let cards;

  if (props.residents) {
    const residents = props.residents.map(resident => {
      return <p>{resident}</p>
    })
    cards = 
      <div className="planetCard">
        <p>{props.name}</p>
        <p>{props.terrain}</p>
        <p>{props.population}</p>
        <p>{props.climate}</p>
        {residents}
      </div> 
  } else if (props.homeworld) {
    cards =
      <div className="person-card">
        <div className="picture"></div>
        <h2 className="people-name">Name: {props.name}</h2>
        <h3 className="homeworld">Homeworld: {props.homeworld}</h3>
        <h4 className="species">Species: {props.species}</h4>
        <p className="people-population">Population: {props.population}</p>
      </div>
  } else if (props.passengers) {
    cards = 
      <div className="vehicleCard">
        <p>{props.name}</p>
        <p>{props.model}</p>
        <p>{props.class}</p>
        <p>{props.passengers}</p>
      </div>
  }

  return (
    <div>
      {cards}
    </div>
  )
}

export default Card;