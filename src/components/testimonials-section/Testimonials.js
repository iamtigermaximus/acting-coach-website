import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import {
  TestimonialsSectionContainer,
  TestimonialsHeadingContainer,
  TestimonialsHeading,
  TestimonialsCardContainer,
  TestimonialCard,
  BlankForImage,
  Name,
  CardTexts,
} from './Testimonials.styles'

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
          autoPlay
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
