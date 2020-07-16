import styled from 'styled-components'

export const Col = styled.div`
  flex: ${(prop) => prop.size};
  margin: ${(prop) => prop.margin};
  width: ${(prop) => prop.width};
`

Col.defaultProps = {
  size: 1,
  margin: '10px 20px',
  width: 'inherit',
}
