import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScoreSerie = ({ serie, scoreSerieList }) => {
  return (
    <StyledScoreSerieDiv>
      <StyledHighScoreTitle>
        Meilleurs scores en série {serie}
      </StyledHighScoreTitle>
      <table>
        <thead>
          <StyledScoreHeaderTr>
            <td>Joueur</td>
            <td>Score</td>
          </StyledScoreHeaderTr>
        </thead>
        <tbody>
          {scoreSerieList.map(playerScore => {
            return (
              <StyledScoreSerieTr key={playerScore.id}>
                <StyledScoreSerieTd>{playerScore.name}</StyledScoreSerieTd>
                <StyledScoreSerieTd>
                  {playerScore.score / 1000}s
                </StyledScoreSerieTd>
              </StyledScoreSerieTr>
            )
          })}
        </tbody>
      </table>
    </StyledScoreSerieDiv>
  )
}

//Styled components
const StyledScoreSerieDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin: 10px 10px;
  background-color: #00aa00;
  border-radius: 10px;
  font-family: 'Courier New', Courier, monospace;
`

const StyledScoreSerieTr = styled.tr``

const StyledScoreSerieTd = styled.td`
  padding: 0px 15px;
  width: 50px;
`

const StyledHighScoreTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
`
const StyledScoreHeaderTr = styled.tr`
  font-weight: bold;
  font-size: 17px;
`

ScoreSerie.propTypes = {
  serie: PropTypes.number,
  scoreSerieList: PropTypes.array
}

export default ScoreSerie
