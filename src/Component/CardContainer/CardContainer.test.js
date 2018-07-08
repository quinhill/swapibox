import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

  let wrapper;
  let mockData;
  let mockCrawlData;

  beforeEach(() => {
    mockCrawlData = {}
    mockData = [{}, {}]
    wrapper = shallow(<CardContainer 
                        data={mockData}
                        crawlData={mockCrawlData}
                        />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})