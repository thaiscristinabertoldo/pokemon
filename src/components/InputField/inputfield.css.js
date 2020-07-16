import styled from 'styled-components'

import { COLORS } from '../../constants'

const DivStyled = styled.div`
  position: relative;
  border: none;
`

const InputStyled = styled.input`
  display: block;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: solid 1px ${COLORS.secondary};
  color: ${COLORS.darkGrey};
  background-color: ${COLORS.background};
  &:focus {
    outline: none;
  }
`

const LabelStyled = styled.label`
  color: ${COLORS.mediumGrey};
  font-size: ${(props) => (props.value !== '' ? '14px' : '16px')};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  padding: 5px;
  top: ${(props) => (props.value !== '' ? '-20px' : '5px')};
  ${InputStyled}:focus ~ & {
    top: -20px;
    font-size: 14px;
  }
`

const ErrorMessageStyled = styled.div`
  padding: 5px;
  color: ${COLORS.red};
  font-size: 14px;
`

const LabelRequiredStyled = styled.label`
  color: ${COLORS.red};
`

export { DivStyled, InputStyled, LabelStyled, ErrorMessageStyled, LabelRequiredStyled }
