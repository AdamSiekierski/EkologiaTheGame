import React from 'react'
import styled from 'styled-components'

import Background from '../images/bg.png'

const GameBackground = styled.div`
  width: 5750px;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  z-index: 0;
`

const GameWrapperOverlay = styled.div`
  ${({ theme }) => theme.mq.small} {
    width: 50vw;
    overflow: auto;
    position: relative;
    font-size: 0.7em;
  }
`

const GameWrapper = ({ children }) => (
  <GameWrapperOverlay>
    <GameBackground>
      { children }
    </GameBackground>
  </GameWrapperOverlay>
)


export default GameWrapper
