import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 10vh;
`
export const AboutHeadingContainer = styled.div`
  letter-spacing: 6px;
`
export const AboutHeading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding-bottom: 50px;
`
export const AboutSubheading = styled.div`
  font-size: 18px;
  padding: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
`
export const AboutCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const AboutCard = styled.div`
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
export const AboutCardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 30px;
  font-size: 30px;
  letter-spacing: 3px;
`
export const AboutCardTexts = styled.p`
  padding: 0 30px;
  letter-spacing: 2px;
`

export const AboutCardButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`

export const AboutCardButton = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
