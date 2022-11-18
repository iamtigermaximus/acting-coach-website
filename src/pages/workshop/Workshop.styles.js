import styled from 'styled-components'
import colors from '../../utils/colors'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
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
