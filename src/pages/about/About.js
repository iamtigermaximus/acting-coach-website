import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  height: 100vh;
  width: 100vw;
  top: 10vh;
`

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>About</h1>
      </Container>
    </>
  )
}

export default About
