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

  it('should call getData with the correct params', () => {
    const expected = 'people'

    wrapper.instance().handleClick()

    expect(mockGetData).toHaveBeenCalledWith(expected)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})