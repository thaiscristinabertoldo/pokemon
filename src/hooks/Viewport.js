import { useState, useEffect, useCallback } from 'react'

import { VIEWPORT } from '../constants'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [isSmall, setIsSmall] = useState(window.innerWidth < VIEWPORT.web)

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setIsSmall(window.innerWidth < VIEWPORT.web)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  return { width, height, isSmall }
}
