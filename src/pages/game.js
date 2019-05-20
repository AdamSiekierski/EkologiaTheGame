import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../assets/theme'

import Game from '../components/game'
import SEO from '../components/seo'
import PhoneBlockade from '../components/phoneBlockade'

const GlobalStyleProvider = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const GamePage = () => (
  <React.Fragment>
    <SEO />
    <PhoneBlockade />
    <GlobalStyleProvider />
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  </React.Fragment>
)

export default GamePage
