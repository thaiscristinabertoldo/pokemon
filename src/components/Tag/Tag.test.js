import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Tag } from './Tag'

afterEach(cleanup)

describe('Tag', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Tag />)

    expect(asFragment(<Tag />)).toMatchSnapshot()
  })

  it('should take a tag text', () => {
    const { getByText } = render(<Tag text="Tag text" />)

    expect(getByText('Tag text')).toBeTruthy()
  })
})
