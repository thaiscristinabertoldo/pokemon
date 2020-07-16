import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

describe('Take a snapshot', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
  })
})
