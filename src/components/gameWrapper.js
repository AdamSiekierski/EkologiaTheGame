import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 5750px;
  height: 100vh;
`

const gameWrapper = (props) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "bg.png" }) {
          childImageSharp {
            fixed(width: 5750, height: 1080) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={
      data => (
        <StyledBackgroundImage fluid={data.image.childImageSharp.fixed}>
          { props.children }
        </StyledBackgroundImage>
      )
    }
  />
)

const StyledGameWrapper = styled(gameWrapper)`
  width: 5750px;
  height: 100vh !important;
  background-position: center;
`

export default StyledGameWrapper
