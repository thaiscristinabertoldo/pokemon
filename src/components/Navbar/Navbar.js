import React, { memo } from 'react'

import { Link } from 'react-router-dom'

import NavbarStyled from './navbar.css'

import logo from '../../assets/logo.png'

export const Navbar = memo(() => {
  return (
    <NavbarStyled data-testid="navbar">
      <Link data-testid="home-link" to="/pokemon">
        <img className="img" src={logo} alt="Pokémon" height="50px" />
      </Link>
    </NavbarStyled>
  )
})
