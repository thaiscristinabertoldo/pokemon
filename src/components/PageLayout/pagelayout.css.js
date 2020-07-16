import styled from 'styled-components'

import { BREAKPOINTS } from '../../constants'

const PageLayoutStyled = styled.div`
  display: flex;
  padding: 8% 15%;

  @media (max-width: ${BREAKPOINTS.web}) {
    padding: 10%;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: 20% 10% 5% 10%;
  }
`

export default PageLayoutStyled
