import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Container = styled.div`
  display: flex;
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
  padding: 5px;
`
export const ServicesSubheading = styled.div`
  font-size: 18px;
  padding: 5px;
  width: 800px;
  display: flex;
  text-align: center;
`

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <ServicesHeadingContainer>
          <ServicesHeading>My Story</ServicesHeading>
          <ServicesSubheading>
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor quiipsum.
          </ServicesSubheading>
        </ServicesHeadingContainer>
      </Container>
    </>
  )
}

export default About
