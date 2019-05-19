import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const IndexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background-color: #824601;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Rules = styled.div`
  background-color: #eeeeee;
  text-align: center;
  padding: 5px;
  margin: 20px 0 0 0;
  max-width: 1200px;
`

const P = styled.p`
  text-align: justify;
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

const IndexPage = () => (
  <IndexWrapper>
    <h1>Ekologia the Game</h1>
    Czyli sprawdzian z ekologii
    <Rules>
      <h3>Zasady gry</h3>
      <P>1. Zadaniem graczy jest jak najszybsze dojście do mety.</P>
      <P>2. Gracze na zmianę losują ilość pól do przesunięcia, korzystając z {`"Maszyny losującej"`}. Losuje ona w zakresie 1 do 3.</P>
      <P>3. Istnieją 3 rodzaje pól:
        <ul>
          <li>Zwykłe</li>
          <li>Z pytaniem - po wejściu gracz odpowiada na pytanie. Jeżeli odpowie źle - cofa się o 3 pola. Jeżeli dobrze - gra kontynuowana jest normalnie</li>
          <li>Cofające - po wejściu gracz cofa się o losową liczbę pól - od 2 do 4</li>
        </ul>
      </P>
      <P>4. Na końcu planszy znajduje się meta (ostatnie pole). Aby wygrać, gracz musi wylosować dokładną ilość pól pozostałych do mety. Jeżeli nie - zostaje w miejscu.</P>
      Życzymy dobrej zabawy!
    </Rules>
    <StyledLink to="/game"> Graj </StyledLink>
  </IndexWrapper>
)

export default IndexPage
