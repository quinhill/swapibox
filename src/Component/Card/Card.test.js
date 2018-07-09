import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  let wrapper;
  let mockData

  beforeEach(() => {
    const mockData = {
      climate: "temperate",
      favorite: false,
      index: 8,
      name: "Kamino",
      population: "1000000000",
      residents: ["Boba Fett"],
      terrain: "ocean",
      type: "planets"
    }
    wrapper = shallow(<Card 
                        data={mockData}
                        />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})