import React from 'react'
import Coach2 from '../../assets/man-g0c4bac179_1920.jpg'
import Coach3 from '../../assets/man-g96b12eebe_1920.jpg'
import Coach4 from '../../assets/man-g21569db4d_1920.jpg'
import Coach5 from '../../assets/man-gae8478dc8_1920.jpg'
import { HeaderContainer, BlankForImage, Image } from './Header.styles'

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
