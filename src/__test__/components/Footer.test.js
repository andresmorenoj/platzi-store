import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('<Footer />', () => {
  const footer = mount(<Footer/>)

  test('Render del component Footer', () => {
    expect(footer.length).toEqual(1)
  })

  test('Reander del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
  })
})

describe('Footer SnapShot', () => {
  test('Comprobar la UI del component Footer', () => {
    const footer = create(<Footer/>)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})