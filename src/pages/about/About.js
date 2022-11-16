import React from 'react'
import Header from '../../components/header/Header'
import {
  Container,
  AboutHeadingContainer,
  AboutHeading,
  AboutCardContainer,
  AboutCard,
  AboutCardTexts,
} from './About.styles'

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <AboutHeadingContainer>
          <AboutHeading>My Story</AboutHeading>
        </AboutHeadingContainer>
        <AboutCardContainer>
          <AboutCard>
            <AboutCardTexts>
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
            </AboutCardTexts>
          </AboutCard>
          <AboutCard>
            <AboutCardTexts>
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
            </AboutCardTexts>
          </AboutCard>
        </AboutCardContainer>
      </Container>
    </>
  )
}

export default About
