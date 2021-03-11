import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Img from '../../imgs/icon-quickcalculationgame.png'
import { logoutPlayer } from '../../utils/funcLogin'
import { useHistory } from 'react-router'

const Header = () => {
  const [namePlayer, setNamePlayer] = useState('')
  const history = useHistory()
  useEffect(() => {
    setNamePlayer(localStorage.getItem('playerName'))
  }, [])
  return (
    <StyledHeader>
      <StyledDivImg>
        <StyledImg src={Img} alt='logo'></StyledImg>
      </StyledDivImg>
      <StyledDiv>
        <StyledNamePlayer>Joueur : </StyledNamePlayer>
        <StyledNamePlayer>{namePlayer}</StyledNamePlayer>
      </StyledDiv>
      <StyledDivButton>
        <StyledLogout onClick={() => logoutPlayer(history)}>
          Quitter
        </StyledLogout>
      </StyledDivButton>
    </StyledHeader>
  )
}

//Styled components
const StyledHeader = styled.div`
  background-color: lightgreen;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 0px;
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  width: 40px;
  margin: 5px 20px;
`
const StyledNamePlayer = styled.span`
  vertical-align: center;
`
const StyledLogout = styled.span`
  border: black solid 1px;
  padding: 2px 4px;
  border-radius: 10px;
  background-color: #00cc00;
  margin: 0px 5px;
`

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
`

const StyledDivImg = styled.div`
  display: flex;
`

const StyledDivButton = styled.div`
  display: flex;
`

export default Header
