import React from 'react'

import DefaultSquare from './squares/defaultSquare'
import BackSquare from './squares/backSquare'
import QuestionSquare from './squares/questionSquare'

const Square = (props) => {
  switch (props.type) {
    case 'question':
      return (
        <QuestionSquare x={props.x} y={props.y} />
      )
    case 'back':
      return (
        <BackSquare x={props.x} y={props.y} />
      )
    default:
      return (
        <DefaultSquare x={props.x} y={props.y} />
      )
  }
}

export default Square
