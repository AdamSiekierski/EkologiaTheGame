import React from 'react'
import styled from 'styled-components'

const WindowWrapper = styled.div`
  position: absolute;
  background-color: #a57934;
  border: 1px solid #824601;
  border-radius: 2px;
  z-index: 3;
`

const TitleBar = styled.div`
  width: 100%;
  padding: 2px;
  line-height: 1;
  background-color: #935712;
  text-align: center;
  font-size: 1.2em;
`

const Content = styled.div`
  width: 100%;
  font-size: 1.6em;
`

const windowTemplate = (props) => (
  <WindowWrapper className={props.className}>
    <TitleBar>
      { props.title }
    </TitleBar>
    <Content>
      { props.children }
    </Content>
  </WindowWrapper>
)

export default windowTemplate;
