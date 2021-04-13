import React from 'react'
import { shallow } from 'enzyme'
import Description from '../src/description'

const description =
  'Rigatoni are a form of tube-shaped pasta of varying lengths and diameters originating in Italy. They are larger than penne and ziti, and sometimes slightly curved, though not as curved as elbow macaroni.'

const wrapper = shallow(<Description description={description} />)

describe('Description', () => {
  it('should render the Description component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('renders the Descriptions children', () => {
    expect(wrapper.find('p').text()).toEqual(description)
  })
})
