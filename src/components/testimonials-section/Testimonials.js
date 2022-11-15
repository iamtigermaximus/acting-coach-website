import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
//import { breakpoints as bp } from '../../utils/layout'

export const TestimonialsSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  padding: 30px 0;
`
export const TestimonialsHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 6px;
`
export const TestimonialsHeading = styled.div`
  font-size: 40px;
  padding: 5px;
  color: ${colors.offWhite};
`

export const TestimonialsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
  overflow: hidden;
`
export const TestimonialCard = styled.div`
  width: 600px;
  height: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.offWhite};
  color: black;
  opacity: 0.8;
`
export const Name = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 30px;
  font-size: 30px;
  letter-spacing: 3px;
`
export const CardTexts = styled.p`
  padding: 0 30px;
  letter-spacing: 2px;
`

export const BlankForImage = styled.div`
  height: 150px;
  width: 150px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const Testimonials = () => {
  return (
    <TestimonialsSectionContainer>
      <TestimonialsHeadingContainer>
        <TestimonialsHeading>What People Are Saying</TestimonialsHeading>
      </TestimonialsHeadingContainer>
      <TestimonialsCardContainer>
        <Carousel
          centerMode
          centerSlidePercentage={100}
          showStatus={false}
          showIndicators={false}
          //autoPlay
          infiniteLoop
          showArrows={true}
          showThumbs={false}
          width={800}
        >
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Brad Pitt</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Jennifer Lawrence</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Julia Roberts</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Keanu Reeves</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Sandra Bullock</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
          <TestimonialCard>
            <BlankForImage></BlankForImage>
            <Name>Chris Evans</Name>
            <CardTexts>
              " Lorem ipsum dolor sit, consectetur incididunt ut labore et
              dolore magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco."
            </CardTexts>
          </TestimonialCard>
        </Carousel>
      </TestimonialsCardContainer>
    </TestimonialsSectionContainer>
  )
}

export default Testimonials
