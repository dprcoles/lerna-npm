import React from 'react'
import { shallow } from 'enzyme'
import Description from '../src/description'

const description =
  'Gnocchi are a type of pasta consisting of small round balls made from flour and sometimes potato.'

const wrapper = shallow(<Description description={description} />)

describe('Description', () => {
  it('should render the Description component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('renders the Descriptions children', () => {
    expect(wrapper.find('p').text()).toEqual(description)
  })
})
