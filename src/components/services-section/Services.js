import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const ServicesSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #dcdcdc;
  padding: 30px 0;
`
export const ServicesHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 6px;
`
export const ServicesHeading = styled.div`
  font-size: 40px;
  padding: 5px;
`
export const ServicesSubheading = styled.div`
  font-size: 18px;
  padding: 5px;
  width: 800px;
  text-align: center;
`

export const ServicesCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const ServiceCard = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  background: black;
  color: ${colors.gainsboro};
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
          <CardButtonContainer>
            <CardButton>Read More</CardButton>
          </CardButtonContainer>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>I Coach.</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore
            magna aliqua ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </CardTexts>
          <CardButtonContainer>
            <CardButton>Read More</CardButton>
          </CardButtonContainer>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>I Direct.</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit, consectetur incididunt ut labore et dolore
            magna aliqua ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </CardTexts>
          <CardButtonContainer>
            <CardButton>Read More</CardButton>
          </CardButtonContainer>
        </ServiceCard>
      </ServicesCardContainer>
    </ServicesSectionContainer>
  )
}

export default Services
