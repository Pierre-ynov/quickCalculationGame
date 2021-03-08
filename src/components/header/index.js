import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../imgs/icon-quickcalculationgame.png'
import { logoutPlayer } from '../../utils/funcLogin'
const Header = () => {
  const [namePlayer, setNamePlayer] = useState('')
  const history = useHistory()
  useEffect(() => {
    setNamePlayer(localStorage.getItem('playerName'))
  }, [])
  return (
    <StyledHeader>
      <StyledImg src={Img} alt='logo'></StyledImg>
      <StyledDiv>
        <StyledNamePlayer>Joueur : </StyledNamePlayer>
        <StyledNamePlayer>{namePlayer}</StyledNamePlayer>
      </StyledDiv>
      <StyledLogout onClick={() => logoutPlayer(history)}>Quitter</StyledLogout>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: lightgreen;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 0px;
  display: flexbox;
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
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
`

export default Header
