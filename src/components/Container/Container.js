import React, { memo } from 'react'

import ContainerStyled from './container.css'

export const Container = memo(({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>
})
