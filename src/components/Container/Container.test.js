import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Container } from './Container'

afterEach(cleanup)

describe('Container', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Container />)

    expect(asFragment(<Container />)).toMatchSnapshot()
  })

  it('should take a children', () => {
    const { getByText } = render(
      <Container>
        <span>childrenText</span>
      </Container>
    )

    expect(getByText('childrenText')).toBeTruthy()
  })
})
