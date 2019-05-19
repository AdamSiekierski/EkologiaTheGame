import React from 'react'
import styled from 'styled-components'
import random from 'random'

import Question from '../question'

import Player1Image from '../../images/player1.png'
import GameContext from '../../utils/gameContext'
import squares from '../../assets/squares'

const StyledPlayerImage = styled.img`
  z-index: 10;
  transform: translate(25px, -10px) scale(0.7);
`

const PlayerWrapper = styled.div`
  position: absolute;
  width: 100px;
  justify-content: center;
  display: flex;
  top: ${props => props.top};
  left: ${props => props.left}px;
  transition: all 0.3s ease-in-out;
`

class PlayerOne extends React.Component {
  constructor(props) {
    super(props)

    this.question = React.createRef();

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.correctQuestionAnswer = this.correctQuestionAnswer.bind(this);
    this.wrongQuestionAnswer = this.wrongQuestionAnswer.bind(this);
  }

  handleLocationChange(context) {
    switch (squares[context.player1Location].type) {
      case 'question':
        this.question.current.show(1);
        break
      case 'back':
        setTimeout(() => this.props.back(random.int(2, 4)), 1000)
        break
      default:
        this.props.continue();
    }
  }

  correctQuestionAnswer() {
    this.props.continue();
  }

  wrongQuestionAnswer() {
    this.props.back(3)
    this.props.continue();
  }

  render() {
    return (
      <>
        <GameContext.Consumer>
          {
            (context) => (
              <PlayerWrapper top={squares[context.player1Location].y} left={(context.player1Location * 100) + (context.player1Location * 14)}>
                <StyledPlayerImage src={Player1Image} alt="player1" />
              </PlayerWrapper>
            )
          }
        </GameContext.Consumer>
        <Question ref={this.question} correctAnswerHandler={this.correctQuestionAnswer} wrongAnswerHandler={this.wrongQuestionAnswer} />
      </>
    )
  }
}

export default PlayerOne
