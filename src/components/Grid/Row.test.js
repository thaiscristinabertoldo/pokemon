import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Row } from './Row'

afterEach(cleanup)

describe('Row', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Row />)

    expect(asFragment(<Row />)).toMatchSnapshot()
  })
})
