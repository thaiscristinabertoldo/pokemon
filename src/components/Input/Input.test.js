import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Input } from './Input'

afterEach(cleanup)

describe('Input', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Input />)

    expect(asFragment(<Input />)).toMatchSnapshot()
  })

  it('should take a placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Placeholder text" />)

    expect(getByPlaceholderText('Placeholder text')).toBeTruthy()
  })
})
