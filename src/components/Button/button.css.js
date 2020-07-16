import styled from 'styled-components'

import { COLORS } from '../../constants'

const colorDisabled = COLORS.lightGrey

const ButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid ${(prop) => (prop.disabled ? colorDisabled : prop.backgroundColor)};
  background-color: ${(prop) => (prop.disabled ? colorDisabled : prop.backgroundColor)};
  border-radius: 5px;
  color: ${(prop) => prop.color};
  font-weight: bold;
  font-size: 16px;
  box-shadow: 2px 2px 6px ${colorDisabled};
  width: ${(prop) => prop.width};
  cursor: ${(prop) => (prop.disabled ? 'default' : 'pointer')};
  &:focus {
    outline: none;
  }
`

ButtonStyled.defaultProps = {
  backgroundColor: COLORS.secondary,
  color: COLORS.white,
  width: 'auto',
}

const ButtonOutlineStyled = styled.button`
  padding: 10px;
  border: 1px solid ${(prop) => (prop.disabled ? colorDisabled : prop.backgroundColor)};
  background-color: ${COLORS.white};
  border-radius: 5px;
  color: ${(prop) => (prop.disabled ? colorDisabled : prop.backgroundColor)};
  font-weight: bold;
  font-size: 16px;
  box-shadow: 2px 2px 6px ${colorDisabled};
  width: ${(prop) => prop.width};
  cursor: ${(prop) => (prop.disabled ? 'default' : 'pointer')};
  &:focus {
    outline: none;
  }
`

ButtonOutlineStyled.defaultProps = {
  backgroundColor: COLORS.secondary,
  width: 'auto',
}

export { ButtonStyled, ButtonOutlineStyled }
