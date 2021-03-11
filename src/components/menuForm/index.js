import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { launchCalculGame } from '../../utils/funcCalculGame'

const MenuForm = ({ history }) => {
  const [serie, setSerie] = useState(10)
  return (
    <div>
      MenuForm
      <StyledMenuForm onSubmit={() => launchCalculGame(history)}>
        <StyledMenuText></StyledMenuText>
        <StyledMenuText>10</StyledMenuText>
        <StyledMenuRadioButton
          type='radio'
          value={10}
          onChange={res => setSerie(res.target.value)}
          checked
        ></StyledMenuRadioButton>
        <StyledMenuText>20</StyledMenuText>
        <StyledMenuRadioButton
          type='radio'
          value={20}
          onChange={res => setSerie(res.target.value)}
        ></StyledMenuRadioButton>
        <StyledMenuButton
          type='submit'
          value='Lancer une partie'
        ></StyledMenuButton>
      </StyledMenuForm>
    </div>
  )
}

//Styled components
const StyledMenuForm = styled.form``

const StyledMenuButton = styled.input``

const StyledMenuText = styled.span``

const StyledMenuRadioButton = styled.input``

//Proptypes
MenuForm.propTypes = {
  history: PropTypes.object
}

export default MenuForm
