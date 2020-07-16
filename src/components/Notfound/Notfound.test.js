import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Notfound } from './Notfound'

afterEach(cleanup)

describe('Notfound', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Notfound />)

    expect(asFragment(<Notfound />)).toMatchSnapshot()
  })

  it('should render a src', () => {
    const { getByTestId } = render(<Notfound />)
    expect(getByTestId('image')).toHaveAttribute('src')
  })

  it('should take a message text', () => {
    const { getByText } = render(<Notfound message="Message text" />)

    expect(getByText('Message text')).toBeTruthy()
  })
})
