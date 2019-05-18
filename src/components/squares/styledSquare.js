import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledSquare = styled(Img)`
  display: block !important;
  position: absolute !important;
  top: ${props => props.y};
  left: ${props => props.x};
  z-index: -10;
`

export default StyledSquare
