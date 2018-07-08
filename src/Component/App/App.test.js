import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  describe('getData', () => {

    let wrapper;
    let mockFetchData;
    let mockFetchCrawl;
    let mockDataArray;

     

    beforeEach(() => {
      mockFetchData = jest.fn()
      mockFetchCrawl = jest.fn()
      mockDataArray = [{}, {}]

      window.fetch = jest.fn().mockImplementation(() => 
                      Promise.resolve({json: () => 
                      Promise.resolve(mockDataArray)
                    }))

      wrapper = shallow(<App 
                          fetchData={mockFetchData}
                          fetchCrawl={mockFetchCrawl}
                          />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
