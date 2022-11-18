import React from 'react'
import {
  Container,
  PageBody,
  PageHeadingContainer,
  PageHeading,
  PageSubheading,
  PageContentContainer,
  CardContainer,
  Image,
  SubTexts,
} from '../../components/common/Common.styles'
import { ButtonContainer, Button } from './Workshop.styles'
import Workshop1 from '../../assets/workshop1.webp'
import Workshop2 from '../../assets/workshop2.webp'
import Workshop3 from '../../assets/workshop3.webp'
import Header from '../../components/header/Header'

const Workshop = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeadingContainer>
          <PageHeading>My Workshops</PageHeading>
          <PageSubheading>
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor quiipsum.
          </PageSubheading>
        </PageHeadingContainer>
        <PageBody>
          <PageContentContainer>
            <CardContainer>
              <Image src={Workshop1} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop2} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop3} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop1} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop2} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop3} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop1} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
            <CardContainer>
              <Image src={Workshop2} />
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
                lorem quis bibendum auctor quiipsum.
              </SubTexts>
              <ButtonContainer>
                <Button>Read more</Button>
              </ButtonContainer>
            </CardContainer>
          </PageContentContainer>
        </PageBody>
      </Container>
    </>
  )
}

export default Workshop
