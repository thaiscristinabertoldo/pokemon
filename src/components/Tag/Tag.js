import React, { memo } from 'react'

import TagStyled from './tag.css'

export const Tag = memo(({ text }) => {
  return <TagStyled>{text}</TagStyled>
})
