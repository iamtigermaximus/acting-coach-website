import styled from 'styled-components'
//import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  top: 10vh;
  margin: 30px 0;
`
export const PageBody = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 50px;
`
export const PageContentContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 10vh;
`
export const PageHeadingContainer = styled.div`
  letter-spacing: 1px;
`
export const PageHeading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 5px;
`
export const PageSubheading = styled.div`
  font-size: 18px;
  padding: 5px;
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
`

export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 10px;
  //border: 1px solid black;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
`

export const Name = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: center;
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
export const SubTexts = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: gray;
  letter-spacing: 1px;
`
