import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Coach from '../../assets/man-gc84f33f3d_1920.jpg'

export const MyStorySectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.offWhite};
  padding: 30px 0;
`

export const MyStoryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
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
  color: ${colors.offWhite};
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
`
export const BlankForImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
`

const MyStory = () => {
  return (
    <MyStorySectionContainer>
      <MyStoryCardContainer>
        <MyStoryCard>
          <CardTitle>My Story</CardTitle>
          <CardTexts>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis.
          </CardTexts>
          <CardButtonContainer>
            <CardButton>Read Jonathan's Story</CardButton>
          </CardButtonContainer>
        </MyStoryCard>
        <MyStoryCard>
          <BlankForImage>
            <Image src={Coach} alt='coach' />
          </BlankForImage>
        </MyStoryCard>
      </MyStoryCardContainer>
    </MyStorySectionContainer>
  )
}

export default MyStory