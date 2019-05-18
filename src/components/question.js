import React from 'react'
import styled from 'styled-components'
import random from 'random'

import Window from './windowTemplate'

import questions from '../assets/questions'

const WindowWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
`

const QuestionWrapper = styled.div`
  padding: 5px;
  width: 25vw;
  text-align: center;
`

const QuestionAnswer = styled.button`
  outline: none;
  font-size: 0.8em;
  margin: 2px;
  border: none;
  background-color: ${props => props.color};
  padding: 3px;
  width: 90%;
`

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this)
    this.verifyAnswer = this.verifyAnswer.bind(this)

    this.state = {
      questionNumber: null,
      isVisible: false,
      player: null,
      colorA: '#E2BC52',
      colorB: '#E2BC52',
      colorC: '#E2BC52',
    }
  }

  show(player) {
    this.setState({
      questionNumber: random.int(0, questions.length - 1),
      isVisible: true,
      player,
    })
  }

  verifyAnswer(answer) {
    switch (answer) {
      case 'a':
        this.setState({ colorA: answer === questions[this.state.questionNumber].valid ? '#228B22' : '#B22222' }) // eslint-disable-line
        break
      case 'b':
        this.setState({ colorB: answer === questions[this.state.questionNumber].valid ? '#228B22' : '#B22222' }) // eslint-disable-line
        break
      case 'c':
        this.setState({ colorC: answer === questions[this.state.questionNumber].valid ? '#228B22' : '#B22222' }) // eslint-disable-line
        break
      default:
        break
    }
    setTimeout(() => {
      if (answer === questions[this.state.questionNumber].valid) {
        this.setState({ isVisible: false, questionNumber: null })
        this.props.correctAnswerHandler()
      } else {
        this.setState({ isVisible: false, questionNumber: null })
        this.props.wrongAnswerHandler()
      }
      this.setState({ colorA: '#E2BC52', colorB: '#E2BC52', colorC: '#E2BC52' })
    }, 2000)
  }

  render() {
    if (this.state.isVisible) {
      return (
        <WindowWrapper>
          <Window title={`Pytanie dla gracza ${this.state.player}`}>
            <QuestionWrapper>
              <h3>{ questions[this.state.questionNumber].question }</h3>
              <QuestionAnswer type="button" onClick={() => this.verifyAnswer('a')} color={this.state.colorA}>A: { questions[this.state.questionNumber].a }</QuestionAnswer>
              <QuestionAnswer type="button" onClick={() => this.verifyAnswer('b')} color={this.state.colorB}>B: { questions[this.state.questionNumber].b }</QuestionAnswer>
              <QuestionAnswer type="button" onClick={() => this.verifyAnswer('c')} color={this.state.colorC}>C: { questions[this.state.questionNumber].c }</QuestionAnswer>
            </QuestionWrapper>
          </Window>
        </WindowWrapper>
      )
    } else {
      return null
    }
  }
}

export default Question
