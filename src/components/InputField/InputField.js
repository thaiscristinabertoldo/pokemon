import React, { memo } from 'react'

import { ErrorMessage } from 'formik'

import { DivStyled, InputStyled, LabelStyled, LabelRequiredStyled, ErrorMessageStyled } from './inputfield.css'

export const InputField = memo(({ field, label, required = false, ...props }) => {
  return (
    <>
      <DivStyled>
        <InputStyled type="text" {...field} {...props} />

        <LabelStyled value={field.value}>
          {label}
          {required && <LabelRequiredStyled>*</LabelRequiredStyled>}
        </LabelStyled>
      </DivStyled>
      <ErrorMessage name={field.name} component={ErrorMessageStyled} />
    </>
  )
})
