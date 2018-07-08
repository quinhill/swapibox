import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  let wrapper;
  let mockData

  beforeEach(() => {
    mockData = {
      name: 'name one',
      homeworld: 'planet',
      species: 'human',
      population: 20000000
    }
    wrapper = shallow(<Card 
                        data={mockData}
                        />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})