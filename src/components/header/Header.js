import React from 'react'
import styled from 'styled-components'
import Coach2 from '../../assets/man-g0c4bac179_1920.jpg'
import Coach3 from '../../assets/man-g96b12eebe_1920.jpg'
import Coach4 from '../../assets/man-g21569db4d_1920.jpg'
import Coach5 from '../../assets/man-gae8478dc8_1920.jpg'

export const HeaderContainer = styled.footer`
  width: 100%;
  height: 200px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding-top: 10vh;
`
export const BlankForImage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`
export const Image = styled.img`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderContainer>
      <BlankForImage>
        <Image src={Coach2} alt='Coach' />
        <Image src={Coach3} alt='Coach' />
        <Image src={Coach4} alt='Coach' />
        <Image src={Coach5} alt='Coach' />
      </BlankForImage>
    </HeaderContainer>
  )
}

export default Header
