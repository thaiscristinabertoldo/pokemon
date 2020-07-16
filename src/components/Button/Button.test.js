import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Button } from './Button'

afterEach(cleanup)

describe('Button', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Button />)

    expect(asFragment(<Button />)).toMatchSnapshot()
  })

  it('should equal to Text button', () => {
    const { getByText } = render(<Button text="Text button" />)
    expect(getByText('Text button')).toBeTruthy()
  })

  it('should be enabled', () => {
    const { getByTestId } = render(<Button text="Text button" />)
    expect(getByTestId('button')).not.toHaveAttribute('disabled')
  })

  it('should be disabled', () => {
    const { getByTestId } = render(<Button text="Text button" disabled />)
    expect(getByTestId('button')).toHaveAttribute('disabled')
  })
})
