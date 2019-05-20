import React from 'react'
import Media from 'react-media'
import styled from 'styled-components'

const PhoneOverlayWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 5px;
  text-align: center;
  background-color: #a57934;
  top: 0;
  left: 0;
  z-index: 10;
`

const PhoneOverlay = () => (
  <Media query="(max-width: 666px)">
    <PhoneOverlayWrapper>
      <h2>Złe wymiary ekranu</h2>
      Obróć telefon lub zmień urządzenie. <br />
      Inaczej gra źle by działała :)
    </PhoneOverlayWrapper>
  </Media>
)

export default PhoneOverlay
