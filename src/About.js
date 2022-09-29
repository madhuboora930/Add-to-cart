import React from 'react'
import { HeroSection } from './components/HeroSection'

export const About = () => {
  const data = {
    name: "Madhu Ecommerce",
  };
  return (
    <div>
        <HeroSection myData={data}/>
        
    </div>
  )
}
