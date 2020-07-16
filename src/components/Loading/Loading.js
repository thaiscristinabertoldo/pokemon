import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import LoadingStyled from './loading.css'

export const Loading = memo(({ size = '5x', ...props }) => {
  return (
    <LoadingStyled>
      <FontAwesomeIcon icon={faSpinner} spin size={size} {...props} />
    </LoadingStyled>
  )
})
