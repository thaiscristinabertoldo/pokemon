import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Grid } from './Grid'

afterEach(cleanup)

describe('Grid', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Grid />)

    expect(asFragment(<Grid />)).toMatchSnapshot()
  })
})
