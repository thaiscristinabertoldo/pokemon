import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Card } from './Card'

afterEach(cleanup)

const pokemon = {
  id: 'UG9rZW1vbjowMDE=',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  name: 'Bulbasaur',
  types: ['Grass', 'Poison'],
}

describe('Card', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Card pokemon={pokemon} />)

    expect(asFragment(<Card />)).toMatchSnapshot()
  })

  it('should take a altText image', () => {
    const { getByAltText } = render(<Card pokemon={pokemon} />)

    expect(getByAltText('Bulbasaur')).toBeTruthy()
  })

  it('should take a tag', () => {
    const { getByText } = render(<Card pokemon={pokemon} />)

    expect(getByText('Grass')).toBeTruthy()
  })
})
