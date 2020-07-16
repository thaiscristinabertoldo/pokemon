import styled from 'styled-components'

import { COLORS } from '../../constants'

const InputStyled = styled.input`
  border-radius: 10px;
  padding: 10px;
  border: solid 1px ${COLORS.lightGrey};
  color: ${COLORS.darkGrey};
  width: 90%;
  &:focus {
    outline: none;
    border: solid 1px ${COLORS.mediumGrey};
  }
`

export default InputStyled
