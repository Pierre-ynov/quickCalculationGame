import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from '../../imgs/icon-quickcalculationgame.png'
import { loginPlayer } from '../../utils/funcLogin'
import { useHistory } from 'react-router'

const LoginForm = () => {
  const [namePlayer, setNamePlayer] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  useEffect(() => {
    setErrorMessage(localStorage.getItem('message'))
  }, [])

  return (
    <div>
      <StyledMarginTop></StyledMarginTop>
      <StyledLoginForm onSubmit={() => loginPlayer(namePlayer, history)}>
        <StyledLoginTitle>Quick Calculation Game</StyledLoginTitle>
        <StyledLogo src={Img} alt='Logo de quick calculation game'></StyledLogo>
        <StyledLoginField
          type='text'
          placeholder='Nom de joueur'
          onChange={e => setNamePlayer(e.target.value)}
        ></StyledLoginField>
        <StyledLoginButton
          type='submit'
          value='Se connecter'
        ></StyledLoginButton>
        <StyledLoginMessage>{errorMessage}</StyledLoginMessage>
      </StyledLoginForm>
    </div>
  )
}

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  padding: 10px 0px;
  margin: 0px 10px;
  border-radius: 10px;
  height: 500px;
`

const StyledLoginField = styled.input`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  height: 24px;
  margin: 15px 0px;
`

const StyledLoginButton = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  margin-top: 25px;
  height: 30px;
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
`

const StyledLoginMessage = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: red;
  margin-top: 10px;
`
const StyledLoginTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 10px 0px;
`

const StyledLogo = styled.img`
  width: 200px;
  margin: 10px 0px;
`

const StyledMarginTop = styled.div`
  height: 57px;
  background-color: #00aa00;
  padding: 0px 0px;
`
LoginForm.propTypes = {
  history: PropTypes.object
}

export default LoginForm
