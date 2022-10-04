import React, { useContext } from 'react'
import { HeroSection } from './components/HeroSection'
import {useProductContext } from './Context/Productcontext';

export const About = () => {
  const {myName}=useProductContext()
  const data = {
    name: "Madhu Ecommerce",
  };
  return (
    <>
      {myName}
        <HeroSection myData={data}/>
        
    </>
  )
}



