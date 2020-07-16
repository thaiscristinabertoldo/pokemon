import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Col } from './Col'

afterEach(cleanup)

describe('Col', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Col />)

    expect(asFragment(<Col />)).toMatchSnapshot()
  })
})
