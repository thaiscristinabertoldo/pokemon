import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

import { FormLegend } from './FormLegend'

afterEach(cleanup)

describe('FormLegend', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<FormLegend />)

    expect(asFragment(<FormLegend />)).toMatchSnapshot()
  })

  it('should render a title', () => {
    const { getByText } = render(<FormLegend title="Text title" />)
    expect(getByText('Text title')).toBeTruthy()
  })

  it('should render a subtitle', () => {
    const { getByText } = render(<FormLegend subtitle="Text subtitle" />)
    expect(getByText('Text subtitle')).toBeTruthy()
  })

  it('should render a icon', () => {
    const { getByTestId } = render(<FormLegend icon={faIdBadge} />)
    expect(getByTestId('icon')).toBeTruthy()
  })
})
