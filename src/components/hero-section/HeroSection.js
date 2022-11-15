import React from 'react'
import Coachvid from '../../assets/Man - 61291.mp4'
import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  justify-content: center;
`
export const Hero = styled.div`
  height: 100%;
  width: 100%;
  // margin: 30px;
  // padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  justify-content: center;
  background-color: black;
  border-radius: 5px;
  opacity: 0.6;
  z-index: 1;

  // @media (min-width: ${bp.md}) {
  //   height: 100vh;
  //   width: 100vw;
  // }
`
export const HeroTitle = styled.h1`
  color: ${colors.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  z-index: 1;

  @media (min-width: ${bp.sm}) {
    font-size: 30px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 80px;
    margin: 50px;
  }
`

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
