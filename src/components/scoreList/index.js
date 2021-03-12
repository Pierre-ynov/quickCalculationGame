import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getScoreList } from '../../utils/funcScore'
import { resetGame } from '../../utils/funcCalculGame'
import ScoreSerie from '../scoreSerie'

const ScoreList = ({ history }) => {
  const [scoreSerie10List, setScoreSerie10List] = useState([])
  const [scoreSerie25List, setScoreSerie25List] = useState([])
  const [scoreSerie50List, setScoreSerie50List] = useState([])
  useEffect(() => {
    var scoreList = [
      { value: 10, setSerie: setScoreSerie10List },
      { value: 25, setSerie: setScoreSerie25List },
      { value: 50, setSerie: setScoreSerie50List }
    ]
    getScoreList(scoreList)
  }, [])
  return (
    <StyledScoreDiv>
      <StyledScoreTitle>Tableau des scores</StyledScoreTitle>
      <ScoreSerie serie={10} scoreSerieList={scoreSerie10List}></ScoreSerie>
      <ScoreSerie serie={25} scoreSerieList={scoreSerie25List}></ScoreSerie>
      <ScoreSerie serie={50} scoreSerieList={scoreSerie50List}></ScoreSerie>
      <StyledResultButton onClick={() => resetGame(history)}>
        Retour au menu
      </StyledResultButton>
    </StyledScoreDiv>
  )
}

//Styled components
const StyledScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  padding: 10px 0px;
  margin: 10px 10px;
  border-radius: 10px;
`

const StyledResultButton = styled.button`
  font-size: 18px;
  padding: 5px 10px;
  height: 30px;
  border-radius: 12px;
  background-color: #00aa00;
  border-style: none;
  margin: 15px 0px;
`
const StyledScoreTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  margin: 20px 0px;
`

ScoreList.propTypes = {
  history: PropTypes.object
}

export default ScoreList
