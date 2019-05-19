import React from 'react'
import styled from 'styled-components'
import random from "random"

import Question from "../question"
import Player2Image from '../../images/player2.png'

import GameContext from '../../utils/gameContext'
import squares from '../../assets/squares'

const StyledPlayerImage = styled.img`
  z-index: 10;
  transform: translate(-15px, -10px) scale(0.7);
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

class PlayerTwo extends React.Component {
  constructor(props) {
    super(props)

    this.question = React.createRef();

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.correctQuestionAnswer = this.correctQuestionAnswer.bind(this);
    this.wrongQuestionAnswer = this.wrongQuestionAnswer.bind(this);
  }

  handleLocationChange(context) {
    switch (squares[context.player2Location].type) {
      case 'question':
        this.question.current.show(2);
        break
      case 'back':
        setTimeout(() => this.props.back(random.int(2, 4)), 1000)
        break
      default:
        this.props.continue();
        break
    }
  }

  correctQuestionAnswer() {
    this.props.continue();
  }

  wrongQuestionAnswer() {
    this.props.back(3);
  }

  render() {
    return (
      <>
        <GameContext.Consumer>
          {
            (context) => (
              <PlayerWrapper top={squares[context.player2Location].y} left={(context.player2Location * 100) + (context.player2Location * 14)}>
                <StyledPlayerImage src={Player2Image} alt="player2" />
              </PlayerWrapper>
            )
          }
        </GameContext.Consumer>
        <Question ref={this.question} correctAnswerHandler={this.correctQuestionAnswer} wrongAnswerHandler={this.wrongQuestionAnswer} />
      </>
    )
  }
}

export default PlayerTwo
