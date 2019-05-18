import React from 'react'

import GameContext from '../utils/gameContext'

class Random extends React.Component {
  render() {
    return (
      <GameContext.Consumer>
        {
          (context) => (
            <button onClick={context.makeAPlayerMove} disabled={context.playerTurn === this.props.player ? (!context.isReadyForNext) : true} type="button">Losuj</button>
          )
        }
      </GameContext.Consumer>
    )
  }
}

export default Random
