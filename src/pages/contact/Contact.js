import React from 'react'
import {
  Container,
  PageBody,
  PageHeadingContainer,
  PageHeading,
  PageSubheading,
  SubTexts,
} from '../../components/common/Common.styles'
import {
  ContactCardContainer,
  ContactCard,
  ContactTitle,
  ContactDetailsContainer,
  ContactDetails,
  ContactLink,
  SocialMediaContainer,
  SocialMedia,
  ContactForm,
  FormLabel,
  FormInput,
  TextArea,
  ButtonContainer,
  Button,
} from './Contact.styles'
import Header from '../../components/header/Header'
import {
  FaPhone,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebook,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeadingContainer>
          <PageHeading>Get In Touch</PageHeading>
          <PageSubheading>
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor quiipsum.
          </PageSubheading>
        </PageHeadingContainer>
        <PageBody>
          <ContactCardContainer>
            <ContactCard>
              <ContactTitle>Contact Me</ContactTitle>
              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </SubTexts>

              <ContactDetailsContainer>
                <ContactDetails>
                  <span>
                    <FaPhone />
                  </span>
                  <ContactLink>0123456789</ContactLink>
                </ContactDetails>
                <ContactDetails>
                  <span>
                    <MdEmail />
                  </span>
                  <ContactLink>jonathan.doe@email.com</ContactLink>
                </ContactDetails>
              </ContactDetailsContainer>
              <SocialMediaContainer>
                <SocialMedia>
                  <FaFacebook />
                </SocialMedia>
                <SocialMedia>
                  <FaInstagramSquare />
                </SocialMedia>
                <SocialMedia>
                  <FaTwitterSquare />
                </SocialMedia>
              </SocialMediaContainer>
            </ContactCard>
            <ContactCard>
              <ContactForm>
                <FormLabel>Your Name</FormLabel>
                <FormInput />
                <FormLabel>Your Email</FormLabel>
                <FormInput />
                <FormLabel>Subject</FormLabel>
                <FormInput />
                <FormLabel>Message</FormLabel>
                <TextArea cols='30' rows='5' />
              </ContactForm>
              <ButtonContainer>
                <Button>Send</Button>
              </ButtonContainer>
            </ContactCard>
            <ContactCard>
              <ContactTitle>Need a Coach?</ContactTitle>

              <SubTexts>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit.
                <br /> <br />
                Mauris in erat justo. Nullam ac urna eu felis dapibus
                condimentum sit amet a augue. Sed non neque elit. Sed ut
                imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque.
              </SubTexts>
              <ButtonContainer>
                <Button>Call Me</Button>
              </ButtonContainer>
            </ContactCard>
          </ContactCardContainer>
        </PageBody>
      </Container>
    </>
  )
}

export default Contact
