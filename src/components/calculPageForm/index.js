import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CalculPageForm = ({ history }) => {
  const [serie, setSerie] = useState(0)
  const [page, setPage] = useState(0)
  const [resultPlayer, setResultPlayer] = useState('')
  const [resultExpected, setResultExpected] = useState(0)
  const [calcul, setCalcul] = useState('')
  const [errorCalcul, setErrorCalcul] = useState('')
  useEffect(() => {}, [page])
  return (
    <div>
      GameForm
      <StyledCalculForm>
        <StyledCalculPageTitle></StyledCalculPageTitle>
        <StyledCalculText></StyledCalculText>
        <StyledCalculField></StyledCalculField>
        <StyledCalculButton></StyledCalculButton>
        <StyledCalculErrorMessage></StyledCalculErrorMessage>
      </StyledCalculForm>
    </div>
  )
}

//Styled components
const StyledCalculForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: lightgreen;
  padding: 10px 0px;
  margin: 0px 10px;
  border-radius: 10px;
  height: 500px; */
`

const StyledCalculField = styled.input`
  font-family: 'Courier New', Courier, monospace;
  /* font-size: 20px;
  height: 24px;
  margin: 15px 0px; */
`

const StyledCalculButton = styled.input`
  /* font-size: 18px;
  padding: 5px 10px;
  margin-top: 25px;
  height: 30px; */
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
`

const StyledCalculErrorMessage = styled.span`
  font-family: 'Courier New', Courier, monospace;
  //font-size: 20px;
  color: red;
  //margin-top: 10px;
`
const StyledCalculPageTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 10px 0px;
`

const StyledCalculText = styled.span``

CalculPageForm.propTypes = {
  history: PropTypes.object
}

export default CalculPageForm
