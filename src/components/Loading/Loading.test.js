import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Loading } from './Loading'

afterEach(cleanup)

describe('Loading', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Loading />)

    expect(asFragment(<Loading />)).toMatchSnapshot()
  })
})
