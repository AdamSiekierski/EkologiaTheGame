import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import StyledSquare from "./styledSquare"

const DefaultSquare = (props) => (
  <StaticQuery
    query={graphql`
      query {
        defaultSquare: file(relativePath: { eq: "square-default.png" }) {
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
        <StyledSquare fixed={data.defaultSquare.childImageSharp.fixed} x={props.x} y={props.y} />
      )
    }
  />
)

export default DefaultSquare
