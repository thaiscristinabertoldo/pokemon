import React, { memo } from 'react'

import { Title } from '../Title/Title'
import { Image } from '../Image/Image'

import emptylist from '../../assets/emptylist.svg'

import NotfoundStyled from './notfound.css'

export const Notfound = memo(({ message = 'Nenhum registro encontrado' }) => {
  return (
    <NotfoundStyled>
      <Image src={emptylist} name="Nenhum registro encontrado" size="300px" />
      <Title title={message} />
    </NotfoundStyled>
  )
})
