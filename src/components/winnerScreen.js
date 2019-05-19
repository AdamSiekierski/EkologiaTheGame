import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const WinnerScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #824601;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 15;
  animation: fadein 0.5s;
  opacity: 0.95;
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 0.95; }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  display: block;
  outline: none;
  font-size: 1.4em;
  margin-top: 10px;
  border: none;
  background-color: #E2BC52;
  padding: 3px;
  width: 400px;
  text-decoration: none;
  color: black;
  text-align: center;
  :hover {
    background-color: #D09A30;
  }
`

const WinnerScreen = (props) => (
  <WinnerScreenWrapper>
    <h1>Wygrana</h1>
    <h3>Wygrał gracz {props.player}. Gratulacje!</h3>
    <StyledLink to="/"> Wróć do ekranu głównego </StyledLink>
    <StyledLink onClick={() => window.location.reload()}> Zagraj jeszcze raz </StyledLink>
  </WinnerScreenWrapper>
)

export default WinnerScreen
