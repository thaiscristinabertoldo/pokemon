import React, { memo } from 'react'

import notfound from '../../assets/notfound.png'

export const Image = memo(({ src, name = 'Image', size = '250px', ...props }) => {
  return (
    <img src={src ? src : notfound} height={size} width={size} title={name} alt={name} data-testid="image" {...props} />
  )
})
