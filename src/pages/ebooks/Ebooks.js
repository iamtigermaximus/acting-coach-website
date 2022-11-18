import React from 'react'
import {
  Container,
  PageBody,
  PageHeadingContainer,
  PageHeading,
  PageSubheading,
  CardContainer,
  PageContentContainer,
  Name,
  SubTexts,
} from '../../components/common/Common.styles'
import { ButtonContainer, Button } from './Ebooks.styles'
import Header from '../../components/header/Header'

const Ebooks = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeadingContainer>
          <PageHeading>My E-Books</PageHeading>
          <PageSubheading>
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor quiipsum.
          </PageSubheading>
        </PageHeadingContainer>
        <PageBody>
          <PageContentContainer>
            <CardContainer>
              <Name>Excepteur Sint Occaecat Cupidatat Non Proident Sunt</Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing </Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Et</Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing </Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>
                Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Et Cu
              </Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Et</Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>Excepteur Sint Occaecat Cupidatat Non Proident Sunt</Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Name>
                Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Et Cu
              </Name>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Download</Button>
              </ButtonContainer>
            </CardContainer>
          </PageContentContainer>
        </PageBody>
      </Container>
    </>
  )
}

export default Ebooks
