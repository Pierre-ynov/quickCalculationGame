import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import { accessAuthorize } from '../utils/funcLogin'
import ResultForm from '../components/resultForm'

const Result = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history)
  }, [])
  return (
    <div>
      <Header></Header>
      <ResultForm history={history}></ResultForm>
    </div>
  )
}

Result.propTypes = {
  history: PropTypes.object
}

export default Result
