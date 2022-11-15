import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background: black;
  color: ${colors.gainsboro};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  letter-spacing: 3;
`

const Banner = () => {
  return (
    <BannerContainer>
      Let Me Help You Overshoot Your Goals in the Right Ways.
    </BannerContainer>
  )
}

export default Banner
