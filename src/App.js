import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Ebooks from './pages/ebooks/Ebooks'
import Workshop from './pages/workshop/Workshop'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ebooks' element={<Ebooks />} />
        <Route path='/workshop' element={<Workshop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}

export default App
