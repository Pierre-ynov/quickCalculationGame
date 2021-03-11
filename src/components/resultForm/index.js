import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ResultForm = ({ history }) => {
  const [result, setResult] = useState(0)
  useEffect(() => {}, [])
  return (
    <div>
      ResultForm
      <StyledResultTitle>Votre Résultat</StyledResultTitle>
      <StyledResultText>{result}s</StyledResultText>
      <StyledResultButton onClick={() => history.push('/menu')}>
        Retour au menu
      </StyledResultButton>
    </div>
  )
}

//Styled components
const StyledResultText = styled.span``

const StyledResultTitle = styled.span``

const StyledResultButton = styled.button``

//Proptypes
ResultForm.propTypes = {
  history: PropTypes.object
}

export default ResultForm