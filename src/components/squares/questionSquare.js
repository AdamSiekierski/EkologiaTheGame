import { graphql, StaticQuery } from "gatsby"
import React from "react"
import StyledSquare from './styledSquare'

const QuestionSquare = (props) => (
  <StaticQuery
    query={graphql`
      query {
        questionSquare: file(relativePath: { eq: "square-question.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={
      data => (
        <StyledSquare fixed={data.questionSquare.childImageSharp.fixed} x={props.x} y={props.y} />
      )
    }
  />
)

export default QuestionSquare
