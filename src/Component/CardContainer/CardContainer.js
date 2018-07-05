import React from 'react';
import './card-container.css';
import Card from '../Card/Card';

const CardContainer = ({data, crawlData}) => {

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
  } else if (data.species) {
    displayCards = data.map(person => <Card {...person}/>)
  } else if (data.terrain) {
    displayCards = data.map(planet => <Card {...planet}/>)
  } else if (data.model) {
    displayCards = data.map(vehicle => <Card {...vehicle}/>)
  }

  return (
    <div className="card-container">
      {displayCards}
    </div>
  )
}

export default CardContainer;