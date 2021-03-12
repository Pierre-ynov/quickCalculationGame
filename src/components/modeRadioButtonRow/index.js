import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModeRadioButtonRow = ({ nameMode, valueMode, setMode, mode }) => {
  return (
    <StyledModeRadioButtonDiv>
      <StyledModeRadioButtonText>{nameMode}</StyledModeRadioButtonText>
      <StyledModeRadioButtonInput
        type='radio'
        value={valueMode}
        onChange={res => setMode(Number(res.target.value))}
        checked={mode == valueMode}
      ></StyledModeRadioButtonInput>
    </StyledModeRadioButtonDiv>
  )
}

//Styled components
const StyledModeRadioButtonDiv = styled.div`
  margin: 0px 5px;
`

const StyledModeRadioButtonText = styled.span`
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
`

const StyledModeRadioButtonInput = styled.input``

//Proptypes
ModeRadioButtonRow.propTypes = {
  nameMode: PropTypes.string,
  valueMode: PropTypes.number,
  setMode: PropTypes.func,
  mode: PropTypes.number
}

export default ModeRadioButtonRow
