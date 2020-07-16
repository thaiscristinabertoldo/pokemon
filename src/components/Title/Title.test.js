import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Title } from './Title'

afterEach(cleanup)

describe('Title', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Title />)

    expect(asFragment(<Title />)).toMatchSnapshot()
  })

  it('should take a Title text', () => {
    const { getByText } = render(<Title title="Title text" />)

    expect(getByText('Title text')).toBeTruthy()
  })
})
