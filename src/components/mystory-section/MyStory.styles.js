import styled from 'styled-components'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'

export const MyStorySectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.gainsboro};
  padding: 30px 0;
`

export const MyStoryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  opacity: 0.9;
`
export const MyStoryCard = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid black;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  background: black;
  color: #dcdcdc;
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
  letter-spacing: 3px;
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

  &:hover {
    background: ${colors.gainsboro};
  }
`
export const BlankForImage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MyStoryLink = styled(Link)`
  text-decoration: none;
`
