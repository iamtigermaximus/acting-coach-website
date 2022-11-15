import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}

export default Home
