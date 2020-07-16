import React, { memo } from 'react'

import { ButtonStyled, ButtonOutlineStyled } from './button.css'

export const Button = memo(({ text, prefix, onClick, outline, ...props }) => {
  return (
    <>
      {outline ? (
        <ButtonOutlineStyled onClick={onClick} {...props}>
          {prefix} {text}
        </ButtonOutlineStyled>
      ) : (
        <ButtonStyled onClick={onClick} data-testid="button" {...props}>
          {prefix} {text}
        </ButtonStyled>
      )}
    </>
  )
})
