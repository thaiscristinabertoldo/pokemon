import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import { Button } from '../Button/Button'
import { Container } from '../Container'
import { Image } from '../Image/Image'
import { Tag } from '../Tag/Tag'
import { Title } from '../Title/Title'

import CardStyled from './card.css'

export const Card = memo(({ pokemon: { id, name, image, types = [] }, onEdit }) => {
  return (
    <CardStyled>
      <Image name={name} src={image} />

      <Title title={name} />

      <Container flexDirection="row" margin="0 0 20px 0">
        {types.map((type, index) => {
          return <Tag key={index} text={type} />
        })}
      </Container>

      <Container justifyContent="center" flexDirection="row" margin="10px 0">
        <Button
          text="Editar"
          width="150px"
          prefix={<FontAwesomeIcon icon={faPen} size="1x" swapOpacity />}
          onClick={() => {
            onEdit(id)
          }}
        />
      </Container>
    </CardStyled>
  )
})
