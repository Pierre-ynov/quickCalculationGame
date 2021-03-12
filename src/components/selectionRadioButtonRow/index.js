import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectionRadioButtonRow = ({ setSerie, valueSerie, serie }) => {
  return (
    <SelectionRadioButtonDiv>
      <StyledRadioButtonText>{valueSerie}</StyledRadioButtonText>
      <StyledRadioButtonInput
        type='radio'
        value={valueSerie}
        onChange={res => setSerie(Number(res.target.value))}
        checked={serie == valueSerie}
      ></StyledRadioButtonInput>
    </SelectionRadioButtonDiv>
  )
}

//Styled components
const StyledRadioButtonText = styled.span`
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
`

const StyledRadioButtonInput = styled.input``

const SelectionRadioButtonDiv = styled.div`
  margin: 0px 5px;
`

//Proptypes
SelectionRadioButtonRow.propTypes = {
  setSerie: PropTypes.func,
  valueSerie: PropTypes.number,
  serie: PropTypes.number
}

export default SelectionRadioButtonRow
