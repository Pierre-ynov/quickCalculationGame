import React, { useEffect } from 'react'
import Header from '../components/header'
import { accessAuthorize } from '../utils/funcLogin'
import PropTypes from 'prop-types'
import MenuForm from '../components/menuForm'

const Menu = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history)
  }, [])
  return (
    <div>
      <Header history={history}></Header>
      <p>Page de menu</p>
      <MenuForm history={history}></MenuForm>
    </div>
  )
}

Menu.propTypes = {
  history: PropTypes.object
}

export default Menu
