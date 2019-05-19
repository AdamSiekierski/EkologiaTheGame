import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Game from '../components/game'

const GlobalStyleProvider = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const GamePage = () => (
  <React.Fragment>
    <GlobalStyleProvider />
    <Game />
  </React.Fragment>
)

export default GamePage
