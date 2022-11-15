import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background: black;
  color: ${colors.offWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`

const Footer = () => {
  return (
    <FooterContainer>© 2022 Jonathan Doe. All rights reserved.</FooterContainer>
  )
}

export default Footer
