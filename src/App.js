import React from 'react'
import './App.css'
import Routes from './config/routes'
import styled from 'styled-components'

function App() {
  return (
    <div className='App'>
      <StyledApp>
        {' '}
        <Routes></Routes>
      </StyledApp>
    </div>
  )
}

const StyledApp = styled.div`
  background-color: #00aa00;
  height: 850px;
  margin: 0px 0px;
`

export default App
