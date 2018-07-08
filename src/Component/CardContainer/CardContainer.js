import React from 'react';
import './card-container.css';
import Card from '../Card/Card';
import Crawl from '../Crawl/Crawl';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const { people, planets, vehicles, type, crawlData, addFavorite } = props;

  let display;

  if (type === 'people') {
    display = people.map((person, index) => {
      return <Card {...person} key={index} addFavorite={addFavorite} />
    })
  } else if (type === 'planets') {
    display = planets.map((planet, index) => {
      return <Card {...planet} key={index} addFavorite={addFavorite} />
    })
  } else if (type === 'vehicles') {
    display = vehicles.map((vehicle, index) => {
      return <Card {...vehicle} key={index} addFavorite={addFavorite} />
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
  data: PropTypes.arrayOf(PropTypes.object),
  crawlData: PropTypes.object
}

export default CardContainer