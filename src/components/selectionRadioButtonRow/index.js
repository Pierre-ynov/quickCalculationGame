import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectionRadioButtonRow = ({ setSerie, valueSerie, isChecked }) => {
  return (
    <SelectionRadioButtonDiv>
      <StyledMenuText>{valueSerie}</StyledMenuText>
      <StyledMenuRadioButton
        type='radio'
        value={valueSerie}
        onChange={res => setSerie(res.target.value)}
        checked={isChecked}
      ></StyledMenuRadioButton>
    </SelectionRadioButtonDiv>
  )
}

//Styled components
const StyledMenuText = styled.span`
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
`

const StyledMenuRadioButton = styled.input``

const SelectionRadioButtonDiv = styled.div`
  margin: 0px 5px;
`

//Proptypes
SelectionRadioButtonRow.propTypes = {
  setSerie: PropTypes.func,
  valueSerie: PropTypes.number,
  isChecked: PropTypes.bool
}

export default SelectionRadioButtonRow
