import React from 'react';
import './crawl.css';
import PropTypes from 'prop-types';

const Crawl = ({title, crawlText, date}) => {
  return (
    <section class="star-wars">

      <div class="crawl">

        <div class="title">
          <h1>{title}</h1>
        </div>
        <p>{crawlText}</p>
        <p>{date}</p>
      </div>

    </section>
  )
}

Crawl.Proptypes = {
  title: PropTypes.string,
  crawlText: PropTypes.string,
  date: PropTypes.string
}

export default Crawl;