import React, { memo } from 'react'

import { Navbar } from '../Navbar/Navbar'

import PageLayoutStyled from './pagelayout.css'

export const PageLayout = memo(({ children }) => {
  return (
    <>
      {<Navbar />}
      <PageLayoutStyled>{children}</PageLayoutStyled>
    </>
  )
})
