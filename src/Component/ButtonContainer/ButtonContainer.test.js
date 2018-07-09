import React from 'react';
import ButtonContainer from './ButtonContainer';
import { shallow } from 'enzyme';

describe('ButtonContainer', () => {
  
  let mockEvent;
  let mockGetData;
  let wrapper;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn(), target: { name: 'people' } }
    mockGetData = jest.fn()

    wrapper = shallow(<ButtonContainer
                        getData={mockGetData}
                        />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})