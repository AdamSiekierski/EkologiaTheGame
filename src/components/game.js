import React from 'react'
import styled from 'styled-components'

const GameWrapper = styled.div`
  height: 100vh;
  width: 5760px;
`

class Game extends React.Component {
  render() {
    return (
      <GameWrapper>
        <h1>Game</h1>
      </GameWrapper>
    )
  }
}

export default Game
