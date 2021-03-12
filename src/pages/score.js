import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import ScoreList from '../components/scoreList'
import { accessAuthorize } from '../utils/funcLogin'

const Score = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history)
  }, [])
  return (
    <div>
      <Header></Header>
      <ScoreList history={history}></ScoreList>
    </div>
  )
}

Score.propTypes = {
  history: PropTypes.object
}

export default Score
