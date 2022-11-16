import React from 'react'
import Coachvid from '../../assets/Man - 61291.mp4'
import { HeroContainer, Video, Hero, HeroTitle } from './HeroSection.styles'

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <Video autoPlay loop muted src={Coachvid} type='video/mp4' />
        <Hero>
          <HeroTitle>Great acting must be effortless. </HeroTitle>
        </Hero>
      </HeroContainer>
    </>
  )
}

export default HeroSection
