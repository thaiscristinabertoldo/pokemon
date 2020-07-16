import React from 'react'

import { Router } from 'react-router-dom'

import { render, cleanup, fireEvent } from '@testing-library/react'

import { createMemoryHistory } from 'history'

import { Navbar } from './Navbar'

afterEach(cleanup)

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(<Router history={history}>{component}</Router>),
  }
}

describe('Navbar', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<Navbar />)

    expect(asFragment(<Navbar />)).toMatchSnapshot()
  })

  it('should render the navbar link', () => {
    const { getByTestId } = renderWithRouter(<Navbar />)
    const navbar = getByTestId('navbar')
    const link = getByTestId('home-link')

    expect(navbar).toContainElement(link)
  })

  it('should navigate link', () => {
    const { getByTestId } = renderWithRouter(<Navbar />)

    fireEvent.click(getByTestId('home-link'))
  })
})
