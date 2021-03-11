import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { generateCalcul, verifyCalcul } from '../../utils/funcCalculGame'

const CalculPageForm = ({ history }) => {
  const [serie, setSerie] = useState(0)
  const [page, setPage] = useState(0)
  const [resultPlayer, setResultPlayer] = useState('')
  const [resultExpected, setResultExpected] = useState(0)
  const [calcul, setCalcul] = useState('')
  const [errorCalcul, setErrorCalcul] = useState('')
  useEffect(() => {
    if (page == 0) {
      setSerie(localStorage.getItem('serie'))
      setPage(page + 1)
    }
  }, [])
  useEffect(() => {
    generateCalcul(setCalcul, setResultExpected, 10)
    console.log('regen')
    setResultPlayer('')
  }, [page])
  return (
    <div>
      <StyledCalculForm
        onSubmit={e => {
          e.preventDefault()
          verifyCalcul(
            resultPlayer,
            resultExpected,
            setErrorCalcul,
            history,
            setPage,
            page,
            serie
          )
        }}
      >
        <StyledCalculPageTitle>{`Page de calcul ${page} sur ${serie}`}</StyledCalculPageTitle>
        <StyledCalculText>{`${calcul} = ?`}</StyledCalculText>
        <StyledCalculField
          value={resultPlayer}
          type='text'
          placeholder='Résultat du calcul'
          onChange={res => setResultPlayer(res.target.value)}
        ></StyledCalculField>
        <StyledCalculButton type='submit' value='Valider'></StyledCalculButton>
        <StyledCalculErrorMessage>{errorCalcul}</StyledCalculErrorMessage>
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
  background-color: lightgreen;
  padding: 10px 0px;
  margin: 0px 10px;
  border-radius: 10px;
  height: 300px;
`

const StyledCalculField = styled.input`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  height: 30px;
  margin: 15px 0px;
  border-radius: 10px;
  border-style: solid;
  border-color: #00aa00;
`

const StyledCalculButton = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  margin-top: 25px;
  height: 30px;
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
`

const StyledCalculErrorMessage = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: red;
  margin-top: 10px;
`
const StyledCalculPageTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 25px 0px;
`

const StyledCalculText = styled.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  height: 24px;
  margin: 15px 0px;
  margin-top: 30px;
`

//Proptypes
CalculPageForm.propTypes = {
  history: PropTypes.object
}

export default CalculPageForm
