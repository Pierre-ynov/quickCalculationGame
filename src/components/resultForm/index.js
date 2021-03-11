import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { resetGame, getResultGame } from '../../utils/funcCalculGame'

const ResultForm = ({ history }) => {
  const [result, setResult] = useState(0)
  useEffect(() => {
    getResultGame(setResult)
  }, [])
  return (
    <StyledResultDiv>
      <StyledResultTitle>Votre Résultat</StyledResultTitle>
      <StyledResultText>{result / 1000}s</StyledResultText>
      <StyledResultButton onClick={() => resetGame(history)}>
        Retour au menu
      </StyledResultButton>
    </StyledResultDiv>
  )
}

//Styled components
const StyledResultText = styled.span`
  margin: 5px 0px;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
`

const StyledResultTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 20px 0px;
`

const StyledResultButton = styled.button`
  font-size: 18px;
  padding: 5px 10px;
  height: 30px;
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
  margin: 15px 0px;
`

const StyledResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  padding: 10px 0px;
  margin: 10px 10px;
  border-radius: 10px;
`

//Proptypes
ResultForm.propTypes = {
  history: PropTypes.object
}

export default ResultForm
