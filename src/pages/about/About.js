import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import colors from '../../utils/colors'
import TestimonialCard from '../../components/testimonials-section/Testimonials'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 10vh;
`
export const ServicesHeadingContainer = styled.div`
  letter-spacing: 6px;
`
export const ServicesHeading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding-bottom: 50px;
`
export const ServicesSubheading = styled.div`
  font-size: 18px;
  padding: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
`
export const ServicesCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const ServiceCard = styled.div`
  width: 500px;
  height: 100%;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  background: ${colors.offWhite};
  color: black;
  opacity: 0.9;
`
export const CardTitle = styled.div`
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

export const CardButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`

export const CardButton = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <ServicesHeadingContainer>
          <ServicesHeading>My Story</ServicesHeading>
        </ServicesHeadingContainer>
        <ServicesCardContainer>
          <ServiceCard>
            <CardTexts>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. <br /> <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Morbi accumsan ipsum velit. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. <br /> <br />
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
              sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque.
            </CardTexts>
          </ServiceCard>
          <ServiceCard>
            <CardTexts>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. <br /> <br />
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Morbi accumsan ipsum velit. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
              <br /> <br />
              Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
              sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque.
            </CardTexts>
          </ServiceCard>
        </ServicesCardContainer>
      </Container>
    </>
  )
}

export default About
