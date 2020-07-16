import styled from 'styled-components'

const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
`

ContainerStyled.defaultProps = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: 0,
}

export default ContainerStyled
