import React from 'react'

import { Router } from 'react-router-dom'

import { render, cleanup, fireEvent } from '@testing-library/react'

import { createMemoryHistory } from 'history'

import { PageLayout } from './PageLayout'

afterEach(cleanup)

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(<Router history={history}>{component}</Router>),
  }
}

describe('PageLayout', () => {
  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<PageLayout />)

    expect(asFragment(<PageLayout />)).toMatchSnapshot()
  })
})
