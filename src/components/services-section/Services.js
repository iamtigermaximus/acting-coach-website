import React from 'react'
import {
  ServicesSectionContainer,
  ServicesHeadingContainer,
  ServicesHeading,
  ServicesSubheading,
  ServicesCardContainer,
  ServiceCard,
  ServicesLink,
  CardButtonContainer,
  CardTitle,
  CardButton,
  CardTexts,
} from './Services.styles'

const Services = () => {
  return (
    <ServicesSectionContainer>
      <ServicesHeadingContainer>
        <ServicesHeading>What I Do</ServicesHeading>
        <ServicesSubheading>
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
          quis bibendum auctor quiipsum.
        </ServicesSubheading>
      </ServicesHeadingContainer>
      <ServicesCardContainer>
        <ServiceCard>
          <CardTitle>I Write.</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore
            magna aliqua ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </CardTexts>
          <ServicesLink to='/ebooks'>
            <CardButtonContainer>
              <CardButton>Read More</CardButton>
            </CardButtonContainer>
          </ServicesLink>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>I Coach.</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore
            magna aliqua ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </CardTexts>
          <ServicesLink to='/workshop'>
            <CardButtonContainer>
              <CardButton>Read More</CardButton>
            </CardButtonContainer>
          </ServicesLink>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>I Direct.</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore
            magna aliqua ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </CardTexts>
          <ServicesLink to='/workshop'>
            <CardButtonContainer>
              <CardButton>Read More</CardButton>
            </CardButtonContainer>
          </ServicesLink>
        </ServiceCard>
      </ServicesCardContainer>
    </ServicesSectionContainer>
  )
}

export default Services
