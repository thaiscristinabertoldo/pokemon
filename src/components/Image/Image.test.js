import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Image } from './Image'

afterEach(cleanup)

describe('Image', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Image />)

    expect(asFragment(<Image />)).toMatchSnapshot()
  })

  it('should render a src', () => {
    const { getByTestId } = render(<Image src="https://img.pokemondb.net/artwork/bulbasaur.jpg" />)
    expect(getByTestId('image')).toHaveAttribute('src', 'https://img.pokemondb.net/artwork/bulbasaur.jpg')
  })
})
