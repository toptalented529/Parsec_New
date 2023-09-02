import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'parsec-swap-uikit'

const StyledNav = styled.nav`
  margin-top: -2vw;
  margin-bottom: 0px;
  text-align: flex-start;
  margin-left:2.5vw;
`
const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

export default function Nav() {
  const location = useLocation()

  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(location.pathname)} scale="sm" variant="primary">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          Swap
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          Liquidity
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}
