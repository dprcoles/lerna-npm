import React from 'react'
import { shallow } from 'enzyme'
import Title from '../src/title'

const title = 'Rigatoni!'

const wrapper = shallow(<Title title={title} />)

describe('Title', () => {
  it('should render the Title Component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('renders the Titles children', () => {
    expect(wrapper.find('h1').text()).toEqual(title)
  })
})
