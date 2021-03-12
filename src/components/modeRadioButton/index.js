import React from 'react'
import PropTypes from 'prop-types'
import ModeRadioButtonRow from '../modeRadioButtonRow'
import styled from 'styled-components'

const ModeRadioButton = ({ mode, setMode }) => {
  return (
    <StyledModeTable>
      <tbody>
        <tr>
          <td>
            <ModeRadioButtonRow
              setMode={setMode}
              valueMode={10}
              nameMode='Facile'
              mode={mode}
            ></ModeRadioButtonRow>
          </td>
          <td>
            <ModeRadioButtonRow
              setMode={setMode}
              valueMode={20}
              nameMode='Difficile'
              mode={mode}
            ></ModeRadioButtonRow>
          </td>
        </tr>
      </tbody>
    </StyledModeTable>
  )
}

//Styled Components
const StyledModeTable = styled.table`
  margin-top: 5px;
  margin-bottom: 15px;
`
//Proptypes
ModeRadioButton.propTypes = {
  mode: PropTypes.number,
  setMode: PropTypes.func
}

export default ModeRadioButton
