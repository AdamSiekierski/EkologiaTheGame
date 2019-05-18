import { graphql, StaticQuery } from "gatsby"
import React from "react"
import StyledSquare from './styledSquare'

const BackSquare = (props) => (
  <StaticQuery
    query={graphql`
      query {
        backSquare: file(relativePath: { eq: "square-back.png" }) {
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
        <StyledSquare fixed={data.backSquare.childImageSharp.fixed} x={props.x} y={props.y} />
      )
    }
  />
)

export default BackSquare
