import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: ${(prop) => prop.flexDirection};
  justify-content: ${(prop) => prop.justifyContent};
  align-items: ${(prop) => prop.alignItems};
  width: ${(prop) => prop.width};
`

Row.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: 'unset',
}
