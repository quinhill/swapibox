import React from 'react';
import './card-container.css';
import Card from '../Card/Card';

const CardContainer = ({
  crawlData, 
  peopleData, 
  planetData,
  vehicleData
}) => {

  let displayCards;

  if (crawlData) {
   displayCards =  
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <h1>{crawlData.title}</h1>
        </div>
        <p>{crawlData.crawlText}</p>
        <p>{crawlData.date}</p>
      </div>
    </section>
  } else if (peopleData.length) {
    displayCards = peopleData.map(person => <Card {...person}/>)
  } else if (planetData.length) {
    displayCards = planetData.map(planet => <Card {...planet}/>)
  } else if (vehicleData.length) {
    displayCards = vehicleData.map(vehicle => <Card {...vehicle}/>)
  }

  return (
    <div className="card-container">
      {displayCards}
    </div>
  )
}

export default CardContainer;