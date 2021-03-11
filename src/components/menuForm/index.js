import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { launchCalculGame } from '../../utils/funcCalculGame'
import SelectionRadioButton from '../selectionRadioButton'

const MenuForm = ({ history }) => {
  const [serie, setSerie] = useState(10)
  useEffect(() => {}, [])
  return (
    <div>
      <StyledMenuForm
        onSubmit={e => {
          e.preventDefault()
          launchCalculGame(history, serie)
        }}
      >
        <StyledMenuTitle>Menu</StyledMenuTitle>
        <StyledSelectionTitle>Série calcul :</StyledSelectionTitle>
        <SelectionRadioButton
          setSerie={setSerie}
          serie={serie}
        ></SelectionRadioButton>
        <StyledMenuButton
          type='submit'
          value='Lancer une partie'
        ></StyledMenuButton>
        <StyledMenuCalculInformation>
          {
            '(Attention, les calculs avec une division prennent au maximun 3 chiffres après la virgule et son arroundi au supérieur. Ex: 1/8 = 0.125)'
          }
        </StyledMenuCalculInformation>
      </StyledMenuForm>
    </div>
  )
}

//Styled components
const StyledMenuForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  padding: 10px 0px;
  margin: 10px 10px;
  border-radius: 10px;
`

const StyledMenuButton = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  height: 30px;
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
  margin: 5px 0px;
`

const StyledMenuCalculInformation = styled.span`
  margin-top: 5px;
  font-style: italic;
`
const StyledMenuTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 10px 0px;
`
const StyledSelectionTitle = styled.span`
  margin: 5px 0px;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
`
//Proptypes
MenuForm.propTypes = {
  history: PropTypes.object
}

export default MenuForm
