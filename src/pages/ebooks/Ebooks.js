import React from 'react'
import {
  Container,
  PageHeadingContainer,
  PageHeading,
  PageSubheading,
} from '../../components/common/Common.styles'
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
      </Container>
    </>
  )
}

export default Ebooks
