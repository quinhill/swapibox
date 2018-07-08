import React from 'react';
import Crawl from './Crawl';
import { shallow } from 'enzyme';

describe('Crawl', () => {

  let wrapper;
  let mockTitle;
  let mockCrawlText;
  let mockDate;

  beforeEach(() => {
    mockTitle = 'string'
    mockCrawlText = 'string'
    mockDate = 'string'
    wrapper = shallow(<Crawl 
                        title={mockTitle}
                        crawlText={mockCrawlText}
                        date={mockDate}
                        />)
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})