import React from 'react';
import './card-container.css';
import Card from '../Card/Card';
import Crawl from '../Crawl/Crawl';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const { 
    people, 
    planets, 
    vehicles, 
    type, 
    crawlData, 
    addFavorite,
    favorites
  } = props;

  let display;

  if (type === 'people') {
    display = people.map((person, index) => {
      return <Card {...person} addFavorite={addFavorite} index={index} />
    })
  } else if (type === 'planets') {
    display = planets.map((planet, index) => {
      return <Card {...planet} addFavorite={addFavorite} index={index} />
    })
  } else if (type === 'vehicles') {
    display = vehicles.map((vehicle, index) => {
      return <Card {...vehicle} addFavorite={addFavorite} index={index} />
    })
  } else if (type ==='favorites') {
    display = favorites.map((favorite, index) => {
      return <Card {...favorite} addFavorite={addFavorite} />
    })
  } else {
    display = <Crawl {...crawlData} />
  }

  return (
    <div className="card-container">
      {display}
    </div>
  )
}

CardContainer.Proptypes = {
  crawlData: PropTypes.object,
  people: PropTypes.arrayOf(PropTypes.object),
  planets: PropTypes.arrayOf(PropTypes.object),
  vehicles: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
  addFavorite: PropTypes.func,
  favorites: PropTypes.arrayOf(PropTypes.object)
}

export default CardContainer