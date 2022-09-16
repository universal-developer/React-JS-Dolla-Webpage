import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { 
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data'

import Services from '../components/Services'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services></Services>
      <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Home