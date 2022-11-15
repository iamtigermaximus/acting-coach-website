import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection'
import ServicesSection from '../../components/services-section/Services'
import TestimonialsSection from '../../components/testimonials-section/Testimonials'
import MyStory from '../../components/mystory-section/MyStory'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <MyStory />
    </>
  )
}

export default Home
