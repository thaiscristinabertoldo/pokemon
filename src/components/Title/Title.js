import React, { memo } from 'react'

import TitleStyled from './title.css'

export const Title = memo(({ title }) => {
  return <TitleStyled>{title}</TitleStyled>
})
