import React, { useEffect } from 'react'
import Header from '../components/header'
import { accessAuthorize } from '../utils/funcLogin'
import PropTypes from 'prop-types'
import CalculPageForm from '../components/calculPageForm'

const Game = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history)
  }, [])
  return (
    <div>
      <Header></Header>
      <CalculPageForm history={history}></CalculPageForm>
    </div>
  )
}

Game.propTypes = {
  history: PropTypes.object
}

export default Game
