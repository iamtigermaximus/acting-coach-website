import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Ebooks = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Ebooks</h1>
      </Container>
    </>
  )
}

export default Ebooks
