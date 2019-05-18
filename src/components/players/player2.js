import React from 'react'
import styled from 'styled-components'
import GameContext from '../../utils/gameContext'
import Player2Image from '../../images/player2.png'
import squares from '../../assets/squares'
import Question from "../question"

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
        setTimeout(() => this.props.back(4), 1000)
        this.props.continue(null);
        break
      default:
        this.props.continue(null);
        break
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
