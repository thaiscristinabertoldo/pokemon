import React from 'react'

import { render, cleanup } from '@testing-library/react'

import { Formik, Field } from 'formik'

import { InputField } from './InputField'

afterEach(cleanup)

describe('InputField', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Formik initialValues={{}}>
        <Field name="input" label="input" component={InputField} />
      </Formik>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should take a asterisk when required', () => {
    const { container } = render(
      <Formik initialValues={{}}>
        <Field name="input" label="input" required component={InputField} />
      </Formik>
    )

    expect(container).toHaveTextContent('*')
  })
})
