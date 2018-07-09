import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {

  it('should match snapshot', () => {

    const mockFavorites = [{}, {}]

    const wrapper = shallow(<Header 
                            favorites={mockFavorites}
                            />)

    expect(wrapper).toMatchSnapshot()
  })
})