import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: lightgreen;
  padding: 2px 0px;
`

export default Header
