import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  FormLegendStyled,
  IconStyled,
  LegendGroupStyled,
  LabelTitleStyled,
  LabelSubTitleStyled,
} from './formlegend.css'

export const FormLegend = memo(({ icon, title, subtitle }) => {
  return (
    <FormLegendStyled>
      {icon && (
        <IconStyled>
          <FontAwesomeIcon icon={icon} size="2x" swapOpacity data-testid="icon" />
        </IconStyled>
      )}

      <LegendGroupStyled>
        {title && <LabelTitleStyled>{title}</LabelTitleStyled>}
        {subtitle && <LabelSubTitleStyled>{subtitle}</LabelSubTitleStyled>}
      </LegendGroupStyled>
    </FormLegendStyled>
  )
})
