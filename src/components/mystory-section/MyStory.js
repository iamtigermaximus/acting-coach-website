import React from 'react'
import Coach from '../../assets/man-g7c1218a07_1920.jpg'
import {
  MyStoryCard,
  MyStorySectionContainer,
  MyStoryCardContainer,
  CardTitle,
  CardTexts,
  MyStoryLink,
  CardButtonContainer,
  CardButton,
  BlankForImage,
  Image,
} from './MyStory.styles'

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
          <MyStoryLink to='/about'>
            <CardButtonContainer>
              <CardButton>Read Jonathan's Story</CardButton>
            </CardButtonContainer>
          </MyStoryLink>
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
