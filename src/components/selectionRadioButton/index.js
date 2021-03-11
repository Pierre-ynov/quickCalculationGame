import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SelectionRadioButtonRow from '../selectionRadioButtonRow'

const SelectionRadioButton = ({ setSerie }) => {
  return (
    <StyledSelectionTable>
      <tbody>
        <tr>
          <td>
            <SelectionRadioButtonRow
              setSerie={setSerie}
              valueSerie={10}
              isChecked={true}
            ></SelectionRadioButtonRow>
          </td>
          <td>
            <SelectionRadioButtonRow
              setSerie={setSerie}
              valueSerie={25}
              isChecked={false}
            ></SelectionRadioButtonRow>
          </td>
          <td>
            <SelectionRadioButtonRow
              setSerie={setSerie}
              valueSerie={50}
              isChecked={false}
            ></SelectionRadioButtonRow>
          </td>
        </tr>
      </tbody>
    </StyledSelectionTable>
  )
}

//Styled components
const StyledSelectionTable = styled.table`
  margin-top: 5px;
  margin-bottom: 15px;
`
//Proptypes
SelectionRadioButton.propTypes = {
  setSerie: PropTypes.func
}

export default SelectionRadioButton
