import React from 'react'
import styled from 'styled-components'

import Window from '../windowTemplate'
import Random from '../randomNumber'

import GameContext from '../../utils/gameContext'
import Player1Image from '../../images/player1.png'
import Player2Image from '../../images/player2.png'

const StyledWindow = styled(Window)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  width: 40vw;
  opacity: 0.9;
  ${({ theme }) => theme.mq.small} {
    width: 50vw;
    height: 100vh;
    right: 0;
    transform: none;
    opacity: 1;
  }
`

const PlayerStatusHalf = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  padding: 5px;
  ${props => (props.left ? `border-right: 1px solid #824601` : `border-left: 1px solid #824601`)};
  text-align: center;
  table {
    tbody {
      tr {
        td {
          text-align: center;
          border: none;
          width: 50%;
          height: 20px;
        }
      }
    }
  }
`

const PlayerImage = styled.img`
  height: 2em;
  margin: 0;
`

const playersStatus = () => (
  <GameContext.Consumer>
    {
      (context) => (
        <StyledWindow title="Gracze">
          <PlayerStatusHalf left>
            Gracz 1
            <table>
              <tbody>
                <tr>
                  <td>Wygląd</td>
                  <td>
                    <PlayerImage src={Player1Image} />
                  </td>
                </tr>
                <tr>
                  <td>Lokalizacja</td>
                  <td>
                    {
                      context.player1Location + 1
                    }
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Maszyna losująca:
                    <br />
                    <Random player={1} />
                  </td>
                </tr>
              </tbody>
            </table>
          </PlayerStatusHalf>
          <PlayerStatusHalf right>
            Gracz 2
            <table>
              <tbody>
                <tr>
                  <td>Wygląd</td>
                  <td>
                    <PlayerImage src={Player2Image} />
                  </td>
                </tr>
                <tr>
                  <td>Lokalizacja</td>
                  <td>
                    {
                      context.player2Location + 1
                    }
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Maszyna losująca:
                    <br />
                    <Random player={2} />
                  </td>
                </tr>
              </tbody>
            </table>
          </PlayerStatusHalf>
        </StyledWindow>
      )
    }
  </GameContext.Consumer>
)


export default playersStatus;
