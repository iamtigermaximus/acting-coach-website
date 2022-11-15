import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Workshop = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Workshop</h1>
      </Container>
    </>
  )
}

export default Workshop
