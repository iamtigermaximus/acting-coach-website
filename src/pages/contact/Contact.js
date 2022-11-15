import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Contact</h1>
      </Container>
    </>
  )
}

export default Contact
