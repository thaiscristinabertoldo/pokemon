import styled from 'styled-components'

import { COLORS } from '../../constants'

const CardStyled = styled.div`
  margin: 0 20px;
  padding: 10px;
  border: none;
  background-color: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export default CardStyled
