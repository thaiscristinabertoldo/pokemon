import styled from 'styled-components'

import { COLORS } from '../../constants'

const FormLegendStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

const IconStyled = styled.div`
  margin-right: 10px;
  opacity: 0.4;
`

const LegendGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelTitleStyled = styled.label`
  font-weight: bold;
  color: ${COLORS.mediumGrey};
  font-size: 18px;
`

const LabelSubTitleStyled = styled.label`
  color: ${COLORS.mediumGrey};
  font-size: 12px;
`

export { FormLegendStyled, IconStyled, LegendGroupStyled, LabelTitleStyled, LabelSubTitleStyled }
