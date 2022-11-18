import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import { Link } from 'react-router-dom'

export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`

export const ContactCard = styled.div`
  width: 350px;
  height: 100%;
  margin: 10px;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  background: ${colors.offWhite};
  color: black;
  opacity: 0.9;
`

export const ContactTitle = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
  color: gray;

  @media (min-width: ${bp.sm}) {
    font-size: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 30px;
    padding: 0 20px;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;

  &:hover {
    background: ${colors.lightGray};
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 20px;
  margin: 20px 10px;
`
export const FormInput = styled.input`
  padding: 10px;
`
export const FormLabel = styled.label`
  margin-top: 20px;
`

export const TextArea = styled.textarea`
  padding: 10px;
`

export const ContactDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ContactDetails = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
`
export const ContactLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
`

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const SocialMedia = styled.div`
  display: flex;
  padding: 10px 20px;
  font-size: 30px;
`
