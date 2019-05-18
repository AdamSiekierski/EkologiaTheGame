import React from 'react'
import random from 'random'

import GameWrapper from './gameWrapper'
import Square from "./sqare"
import PlayerOne from './players/player1'
import PlayerTwo from './players/player2'
import PlayerStatus from './players/playersStatus'

import squares from '../assets/squares'
import GameContext from '../utils/gameContext'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.playerOne = React.createRef();
    this.playerTwo = React.createRef();

    this.continue = this.continue.bind(this);
    this.goBack = this.goBack.bind(this);

    this.state = {
      playerTurn: 1,
      player1Location: 0,
      player2Location: 0,
      isReadyForNext: true,

      makeAPlayerMove: () => {
        const i = random.int(1, 3)
        this.setState({ isReadyForNext: false })
        setTimeout(() => {
          switch (this.state.playerTurn) {
            case 1:
              this.setState(state => {
                const corrected = state.player1Location + i;
                if (corrected <= 49) {
                  return ({ player1Location: corrected })
                } else {
                  return ({})
                }
              }, () => {
                this.playerOne.current.handleLocationChange(this.state);
              });
              break
            case 2:
              this.setState(state => {
                const corrected = state.player2Location + i;
                if (corrected <= 49) {
                  return ({ player2Location: corrected })
                } else {
                  return ({})
                }
              }, () => {
                this.playerTwo.current.handleLocationChange(this.state);
              });
              break
            default:
              break
          }
        }, 1000);
      },
    }
  }

  continue() {
    this.setState(state => {
      const player = state.playerTurn === 1 ? 2 : 1
      return ({
        isReadyForNext: true,
        playerTurn: player,
      })
    })
  }

  goBack(player, n) {
    switch (player) {
      case 1:
        this.setState(state => {
          const corrected = state.player1Location - n;
          return ({ player1Location: corrected })
        })
        break
      case 2:
        this.setState(state => {
          const corrected = state.player2Location - n;
          return ({ player2Location: corrected })
        })
        break
      default:
        break
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <GameWrapper>
          <PlayerOne ref={this.playerOne} continue={this.continue} back={(n) => this.goBack(1, n)} />
          <PlayerTwo ref={this.playerTwo} continue={this.continue} back={(n) => this.goBack(2, n)} />
          {
            squares.map((item, i) => <Square x={`${i * 100 + i * 14}px`} y={item.y} key={i} type={item.type} />)
          }
          <PlayerStatus />
        </GameWrapper>
      </GameContext.Provider>
    )
  }
}

export default Game
