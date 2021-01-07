import React from 'react'
import styled from 'styled-components'
// import './styles/navbar.css'
// import Logo from '../../../public/images/Logo.svg'

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 64px;
`

class NavBar extends React.Component {
  render() {
    return (
      <StyledNav>
        <img src="images/Logo.svg" alt="logo" className="logo" />
      </StyledNav>)
  }
}

export default NavBar
